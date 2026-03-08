const categoryTabs = document.getElementById("categoryTabs");
const menuContainer = document.getElementById("menuContainer");
const cartItemsEl = document.getElementById("cartItems");
const subtotalEl = document.getElementById("subtotal");
const deliveryFeeEl = document.getElementById("deliveryFee");
const grandTotalEl = document.getElementById("grandTotal");
const estimatedTimeEl = document.getElementById("estimatedTime");
const orderTypeEl = document.getElementById("orderType");
const addressField = document.getElementById("addressField");
const sendWhatsAppBtn = document.getElementById("sendWhatsAppBtn");
const clearOrderBtn = document.getElementById("clearOrderBtn");

const customerNameEl = document.getElementById("customerName");
const customerPhoneEl = document.getElementById("customerPhone");
const orderDateEl = document.getElementById("orderDate");
const orderTimeEl = document.getElementById("orderTime");
const customerAddressEl = document.getElementById("customerAddress");
const notesEl = document.getElementById("notes");

let activeCategory = MENU_DATA[0]?.category || "";
let state = {};

function formatMoney(value) {
  return `${APP_CONFIG.currencySymbol}${Number(value).toFixed(2)}`;
}

function initializeState() {
  MENU_DATA.forEach((category) => {
    category.items.forEach((item) => {
      state[item.id] = {
        qty: 0,
        size: item.pricingType === "size" ? Object.keys(item.sizes)[0] : null,
      };
    });
  });
}

function renderCategoryTabs() {
  categoryTabs.innerHTML = MENU_DATA.map(
    (cat) => `
      <button class="tab-btn ${cat.category === activeCategory ? "active" : ""}" data-category="${cat.category}">
        ${cat.category}
      </button>
    `
  ).join("");

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.category;
      renderCategoryTabs();
      renderMenu();
    });
  });
}

function getDisplayedCategories() {
  return MENU_DATA.filter((cat) => cat.category === activeCategory);
}

function renderMenu() {
  const categories = getDisplayedCategories();

  menuContainer.innerHTML = categories
    .map(
      (category) => `
        <div class="menu-card">
          <div class="menu-card-header">
            <h3>${category.category}</h3>
            <p>${category.description}</p>
          </div>
          <div class="menu-items">
            ${category.items.map((item) => renderMenuItem(item)).join("")}
          </div>
        </div>
      `
    )
    .join("");

  attachMenuEvents();
}

function renderMenuItem(item) {
  const itemState = state[item.id];

  const currentPrice =
    item.pricingType === "size"
      ? item.sizes[itemState.size]
      : item.price;

  const controlHtml =
    item.pricingType === "size"
      ? `
        <div class="item-controls">
          <select data-id="${item.id}" class="size-select">
            ${Object.keys(item.sizes)
              .map(
                (sizeKey) => `
                  <option value="${sizeKey}" ${itemState.size === sizeKey ? "selected" : ""}>
                    ${item.sizeLabels?.[sizeKey] || sizeKey} - ${formatMoney(item.sizes[sizeKey])}
                  </option>
                `
              )
              .join("")}
          </select>
          <input
            type="number"
            min="0"
            value="${itemState.qty}"
            data-id="${item.id}"
            class="qty-input"
            placeholder="Qty"
          />
        </div>
      `
      : `
        <div class="item-controls">
          <input
            type="number"
            min="0"
            value="${itemState.qty}"
            data-id="${item.id}"
            class="qty-input"
            placeholder="Qty"
          />
        </div>
      `;

  const metaText =
    item.pricingType === "size"
      ? `Choose size and quantity`
      : `${item.unitLabel}${item.minQty && item.minQty > 1 ? ` • Min ${item.minQty}` : ""}`;

  return `
    <div class="menu-item">
      <div>
        <div class="item-name">${item.name}</div>
        <div class="item-meta">${metaText}</div>
      </div>
      ${controlHtml}
      <div class="item-price">${formatMoney(currentPrice)}</div>
    </div>
  `;
}

function attachMenuEvents() {
  document.querySelectorAll(".qty-input").forEach((input) => {
    input.addEventListener("input", (e) => {
      const id = e.target.dataset.id;
      let value = parseInt(e.target.value, 10);

      if (isNaN(value) || value < 0) value = 0;

      state[id].qty = value;
      renderSummary();
    });
  });

  document.querySelectorAll(".size-select").forEach((select) => {
    select.addEventListener("change", (e) => {
      const id = e.target.dataset.id;
      state[id].size = e.target.value;
      renderMenu();
      renderSummary();
    });
  });
}

function findItemById(id) {
  for (const category of MENU_DATA) {
    const found = category.items.find((item) => item.id === id);
    if (found) return found;
  }
  return null;
}

function getCartItems() {
  const cart = [];

  Object.keys(state).forEach((id) => {
    const itemState = state[id];
    if (!itemState || itemState.qty <= 0) return;

    const item = findItemById(id);
    if (!item) return;

    let unitPrice = 0;
    let selectedLabel = item.unitLabel || "";

    if (item.pricingType === "size") {
      unitPrice = item.sizes[itemState.size];
      selectedLabel = item.sizeLabels?.[itemState.size] || itemState.size;
    } else {
      unitPrice = item.price;
    }

    const lineTotal = unitPrice * itemState.qty;

    cart.push({
      id: item.id,
      name: item.name,
      qty: itemState.qty,
      unitPrice,
      selectedLabel,
      minQty: item.minQty || 1,
      pricingType: item.pricingType,
      lineTotal,
    });
  });

  return cart;
}

function calculateSubtotal(cartItems) {
  return cartItems.reduce((sum, item) => sum + item.lineTotal, 0);
}

function hasLargeOrder(cartItems, subtotal) {
  const hasTrayStyle = cartItems.some(
    (item) =>
      item.selectedLabel.toLowerCase().includes("tray") ||
      item.selectedLabel.toLowerCase().includes("full") ||
      item.selectedLabel.toLowerCase().includes("half")
  );

  return hasTrayStyle || subtotal >= APP_CONFIG.sameDayTrayThreshold;
}

function calculateDeliveryFee(cartItems, subtotal) {
  if (orderTypeEl.value === "pickup") return APP_CONFIG.pickupFee || 0;

  return hasLargeOrder(cartItems, subtotal)
    ? APP_CONFIG.largeOrderDeliveryFee
    : APP_CONFIG.deliveryFee;
}

function calculateEstimatedTime(cartItems, subtotal) {
  if (cartItems.length === 0) return "-";

  const large = hasLargeOrder(cartItems, subtotal);
  if (large) return APP_CONFIG.largeOrderEta;

  return orderTypeEl.value === "pickup"
    ? APP_CONFIG.pickupEta
    : APP_CONFIG.deliveryEta;
}

function validateMinimums(cartItems) {
  const errors = [];

  cartItems.forEach((item) => {
    if (item.qty > 0 && item.qty < item.minQty) {
      errors.push(`${item.name} requires minimum ${item.minQty}`);
    }
  });

  return errors;
}

function renderSummary() {
  const cartItems = getCartItems();
  const subtotal = calculateSubtotal(cartItems);
  const deliveryFee = calculateDeliveryFee(cartItems, subtotal);
  const grandTotal = subtotal + deliveryFee;
  const estimatedTime = calculateEstimatedTime(cartItems, subtotal);

  if (cartItems.length === 0) {
    cartItemsEl.innerHTML = `<p class="empty-text">No items selected yet.</p>`;
  } else {
    cartItemsEl.innerHTML = cartItems
      .map(
        (item) => `
          <div class="cart-item-row">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-sub">
              ${item.selectedLabel} • Qty: ${item.qty} • ${formatMoney(item.unitPrice)} each
            </div>
            <div class="cart-item-sub">
              Line total: <strong>${formatMoney(item.lineTotal)}</strong>
            </div>
          </div>
        `
      )
      .join("");
  }

  subtotalEl.textContent = formatMoney(subtotal);
  deliveryFeeEl.textContent = formatMoney(deliveryFee);
  grandTotalEl.textContent = formatMoney(grandTotal);
  estimatedTimeEl.textContent = estimatedTime;
}

function toggleAddressField() {
  if (orderTypeEl.value === "delivery") {
    addressField.classList.remove("hidden");
  } else {
    addressField.classList.add("hidden");
  }
}

function getCustomerData() {
  return {
    name: customerNameEl.value.trim(),
    phone: customerPhoneEl.value.trim(),
    date: orderDateEl.value,
    time: orderTimeEl.value,
    orderType: orderTypeEl.value,
    address: customerAddressEl.value.trim(),
    notes: notesEl.value.trim(),
  };
}

function validateOrder() {
  const customer = getCustomerData();
  const cartItems = getCartItems();

  if (!customer.name) {
    alert("Please enter customer name.");
    return false;
  }

  if (!customer.phone) {
    alert("Please enter phone number.");
    return false;
  }

  if (!customer.date) {
    alert("Please select order date.");
    return false;
  }

  if (!customer.time) {
    alert("Please select preferred time.");
    return false;
  }

  if (customer.orderType === "delivery" && !customer.address) {
    alert("Please enter delivery address.");
    return false;
  }

  if (cartItems.length === 0) {
    alert("Please add at least one item.");
    return false;
  }

  const minimumErrors = validateMinimums(cartItems);
  if (minimumErrors.length > 0) {
    alert(minimumErrors.join("\n"));
    return false;
  }

  return true;
}

function buildWhatsAppMessage() {
  const customer = getCustomerData();
  const cartItems = getCartItems();
  const subtotal = calculateSubtotal(cartItems);
  const deliveryFee = calculateDeliveryFee(cartItems, subtotal);
  const grandTotal = subtotal + deliveryFee;
  const estimatedTime = calculateEstimatedTime(cartItems, subtotal);

  const itemLines = cartItems
    .map((item) => {
      return `- ${item.name} | ${item.selectedLabel} | Qty: ${item.qty} | ${formatMoney(item.lineTotal)}`;
    })
    .join("\n");

  let message = `New Order - ${APP_CONFIG.businessName}\n\n`;
  message += `Customer Name: ${customer.name}\n`;
  message += `Phone: ${customer.phone}\n`;
  message += `Order Type: ${customer.orderType}\n`;
  message += `Order Date: ${customer.date}\n`;
  message += `Preferred Time: ${customer.time}\n`;

  if (customer.orderType === "delivery") {
    message += `Address: ${customer.address}\n`;
  }

  if (customer.notes) {
    message += `Notes: ${customer.notes}\n`;
  }

  message += `\nItems:\n${itemLines}\n\n`;
  message += `Subtotal: ${formatMoney(subtotal)}\n`;
  message += `Delivery Fee: ${formatMoney(deliveryFee)}\n`;
  message += `Total: ${formatMoney(grandTotal)}\n`;
  message += `Estimated Time: ${estimatedTime}\n\n`;

  if (APP_CONFIG.notes?.length) {
    message += `Important Notes:\n`;
    APP_CONFIG.notes.forEach((note) => {
      message += `- ${note}\n`;
    });
  }

  return message;
}

function sendToWhatsApp() {
  if (!validateOrder()) return;

  const message = buildWhatsAppMessage();
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
}

function clearOrder() {
  initializeState();

  customerNameEl.value = "";
  customerPhoneEl.value = "";
  orderDateEl.value = "";
  orderTimeEl.value = "";
  customerAddressEl.value = "";
  notesEl.value = "";
  orderTypeEl.value = "pickup";

  toggleAddressField();
  renderCategoryTabs();
  renderMenu();
  renderSummary();
}

function setDefaultDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  orderDateEl.value = `${yyyy}-${mm}-${dd}`;
}

function init() {
  initializeState();
  renderCategoryTabs();
  renderMenu();
  renderSummary();
  toggleAddressField();
  setDefaultDate();

  orderTypeEl.addEventListener("change", () => {
    toggleAddressField();
    renderSummary();
  });

  sendWhatsAppBtn.addEventListener("click", sendToWhatsApp);
  clearOrderBtn.addEventListener("click", clearOrder);
}

init();
