const products = [

/* 🌱 SEEDS */
{id:1,name:"Tomato Seeds Pack",cat:"Seeds",type:"Affordable",price:40,rating:4.8,img:"https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=85",desc:"Good quality tomato seeds for farm cultivation."},
{id:2,name:"Onion Seeds Pack",cat:"Seeds",type:"Affordable",price:50,rating:4.7,img:"https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=85",desc:"Affordable onion seeds for regular farming."},
{id:3,name:"Wheat Seeds Pack",cat:"Seeds",type:"Affordable",price:60,rating:4.8,img:"https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=85",desc:"Quality wheat seeds for seasonal farming."},
{id:4,name:"Rice Seeds Pack",cat:"Seeds",type:"Affordable",price:70,rating:4.8,img:"https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=85",desc:"Rice seeds suitable for paddy cultivation."},
{id:5,name:"Chilli Seeds Pack",cat:"Seeds",type:"Affordable",price:45,rating:4.6,img:"https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=85",desc:"Chilli seeds for healthy crop production."},
{id:6,name:"Brinjal Seeds Pack",cat:"Seeds",type:"Affordable",price:40,rating:4.7,img:"https://images.unsplash.com/photo-1607305387299-a3d9611cd469?auto=format&fit=crop&w=800&q=85",desc:"Brinjal seeds for vegetable farming."},
{id:7,name:"Okra Seeds Pack",cat:"Seeds",type:"Affordable",price:35,rating:4.6,img:"https://images.unsplash.com/photo-1598030304671-9d8f4a4c4f7e?auto=format&fit=crop&w=800&q=85",desc:"Affordable okra seeds for farmers."},
{id:8,name:"Cotton Seeds Pack",cat:"Seeds",type:"Affordable",price:90,rating:4.8,img:"https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=85",desc:"Quality cotton seeds for field cultivation."},
{id:9,name:"Maize Seeds Pack",cat:"Seeds",type:"Affordable",price:55,rating:4.7,img:"https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=85",desc:"Maize seeds for healthy crop growth."},
{id:10,name:"Groundnut Seeds Pack",cat:"Seeds",type:"Affordable",price:65,rating:4.7,img:"https://images.unsplash.com/photo-1567892737950-30c4db37cd89?auto=format&fit=crop&w=800&q=85",desc:"Groundnut seeds for seasonal farming."},

/* 🌿 FERTILIZERS */
{id:11,name:"Neem Fertilizer",cat:"Fertilizers",type:"Organic",price:120,rating:4.6,img:"https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=85",desc:"Neem-based fertilizer for better soil health."},
{id:12,name:"Vermicompost",cat:"Fertilizers",type:"Organic",price:90,rating:4.7,img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=85",desc:"Natural compost for improving soil fertility."},
{id:13,name:"Organic Compost",cat:"Fertilizers",type:"Organic",price:80,rating:4.7,img:"https://images.unsplash.com/photo-1592982537447-6f2a6a0a7c4b?auto=format&fit=crop&w=800&q=85",desc:"Affordable organic compost for crops."},
{id:14,name:"NPK Fertilizer Small Pack",cat:"Fertilizers",type:"Affordable",price:150,rating:4.5,img:"https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=85",desc:"Balanced nutrients for healthy crop growth."},
{id:15,name:"Urea Fertilizer Pack",cat:"Fertilizers",type:"Affordable",price:100,rating:4.5,img:"https://images.unsplash.com/photo-1592982537447-6f2a6a0a7c4b?auto=format&fit=crop&w=800&q=85",desc:"Common fertilizer for crop nutrition."},
{id:16,name:"Potash Fertilizer",cat:"Fertilizers",type:"Affordable",price:130,rating:4.6,img:"https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=85",desc:"Potassium fertilizer for crop development."},
{id:17,name:"Seaweed Fertilizer",cat:"Fertilizers",type:"Organic",price:180,rating:4.7,img:"https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=85",desc:"Natural seaweed fertilizer for plants."},
{id:18,name:"Bone Meal Fertilizer",cat:"Fertilizers",type:"Organic",price:110,rating:4.5,img:"https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=85",desc:"Organic fertilizer supporting root growth."},
{id:19,name:"Bio Fertilizer",cat:"Fertilizers",type:"Organic",price:140,rating:4.6,img:"https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=85",desc:"Bio fertilizer for sustainable farming."},
{id:20,name:"Plant Growth Fertilizer",cat:"Fertilizers",type:"Affordable",price:125,rating:4.6,img:"https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=800&q=85",desc:"Helps support healthy plant growth."},

/* 🛠️ FARM TOOLS */
{id:21,name:"Hand Hoe",cat:"Tools",type:"Affordable",price:150,rating:4.8,img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=85",desc:"Simple hand hoe for everyday farm work."},
{id:22,name:"Khurpi",cat:"Tools",type:"Affordable",price:80,rating:4.7,img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=85",desc:"Traditional hand tool for small farming work."},
{id:23,name:"Small Shovel",cat:"Tools",type:"Affordable",price:180,rating:4.6,img:"https://images.unsplash.com/photo-1599685315640-3f3b7a7a6f44?auto=format&fit=crop&w=800&q=85",desc:"Strong and useful shovel for farm activities."},
{id:24,name:"Hand Weeder",cat:"Tools",type:"Affordable",price:120,rating:4.7,img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=85",desc:"Easy-to-use tool for removing weeds."},
{id:25,name:"Farming Gloves",cat:"Tools",type:"Affordable",price:80,rating:4.6,img:"https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=85",desc:"Comfortable gloves for farm and garden work."},
{id:26,name:"Hand Sprayer",cat:"Tools",type:"Affordable",price:250,rating:4.7,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Manual sprayer for crop care."},
{id:27,name:"Pruning Cutter",cat:"Tools",type:"Affordable",price:140,rating:4.6,img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=85",desc:"Useful cutter for pruning plants."},
{id:28,name:"Sickle",cat:"Tools",type:"Affordable",price:160,rating:4.8,img:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=85",desc:"Traditional farming sickle for harvesting."},
{id:29,name:"Seed Planter",cat:"Tools",type:"Affordable",price:350,rating:4.7,img:"https://images.unsplash.com/photo-1592982537447-6f2a6a0a7c4b?auto=format&fit=crop&w=800&q=85",desc:"Simple tool for planting seeds evenly."},
{id:30,name:"Hand Cultivator",cat:"Tools",type:"Affordable",price:200,rating:4.6,img:"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=85",desc:"Hand tool for loosening and preparing soil."},

/* 💧 IRRIGATION */
{id:31,name:"Watering Can",cat:"Irrigation",type:"Affordable",price:180,rating:4.7,img:"https://images.unsplash.com/photo-1599685315640-3f3b7a7a6f44?auto=format&fit=crop&w=800&q=85",desc:"Simple watering can for small farms."},
{id:32,name:"Drip Irrigation Pipe",cat:"Irrigation",type:"Affordable",price:200,rating:4.8,img:"https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=85",desc:"Affordable drip pipe for saving water."},
{id:33,name:"Drip Connector Set",cat:"Irrigation",type:"Affordable",price:100,rating:4.6,img:"https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=85",desc:"Connectors for simple drip irrigation systems."},
{id:34,name:"Garden Hose",cat:"Irrigation",type:"Affordable",price:250,rating:4.6,img:"https://images.unsplash.com/photo-1599685315640-3f3b7a7a6f44?auto=format&fit=crop&w=800&q=85",desc:"Flexible hose for farm and garden watering."},
{id:35,name:"Water Spray Nozzle",cat:"Irrigation",type:"Affordable",price:90,rating:4.5,img:"https://images.unsplash.com/photo-1599685315640-3f3b7a7a6f44?auto=format&fit=crop&w=800&q=85",desc:"Simple nozzle for controlled watering."},
{id:36,name:"Mini Water Pump",cat:"Irrigation",type:"Affordable",price:400,rating:4.5,img:"https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=85",desc:"Small water pump for basic irrigation."},
{id:37,name:"Pipe Clamp Set",cat:"Irrigation",type:"Affordable",price:70,rating:4.6,img:"https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=85",desc:"Useful clamps for securing irrigation pipes."},
{id:38,name:"Sprinkler Head",cat:"Irrigation",type:"Affordable",price:150,rating:4.6,img:"https://images.unsplash.com/photo-1599685315640-3f3b7a7a6f44?auto=format&fit=crop&w=800&q=85",desc:"Simple sprinkler head for crop watering."},
{id:39,name:"Water Storage Drum",cat:"Irrigation",type:"Affordable",price:350,rating:4.5,img:"https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=85",desc:"Useful water storage solution for farming."},
{id:40,name:"Drip Starter Kit",cat:"Irrigation",type:"Affordable",price:300,rating:4.8,img:"https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=800&q=85",desc:"Basic drip irrigation kit for small farms."},

/* 🐛 CROP PROTECTION */
{id:41,name:"Neem Crop Protection",cat:"Pesticides",type:"Organic",price:100,rating:4.7,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Neem-based crop protection solution."},
{id:42,name:"Bio Pest Control",cat:"Pesticides",type:"Organic",price:120,rating:4.6,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Natural option for basic pest management."},
{id:43,name:"Plant Protection Spray",cat:"Pesticides",type:"Affordable",price:150,rating:4.5,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Crop protection spray for common farm use."},
{id:44,name:"Organic Pest Repellent",cat:"Pesticides",type:"Organic",price:90,rating:4.7,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Affordable organic pest repellent."},
{id:45,name:"Fungus Control Solution",cat:"Pesticides",type:"Affordable",price:180,rating:4.6,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Helps protect crops from common fungal problems."},
{id:46,name:"Insect Trap Pack",cat:"Pesticides",type:"Affordable",price:70,rating:4.5,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Simple traps for controlling farm insects."},
{id:47,name:"Sticky Pest Traps",cat:"Pesticides",type:"Affordable",price:60,rating:4.6,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Easy-to-use sticky traps for crop protection."},
{id:48,name:"Organic Crop Spray",cat:"Pesticides",type:"Organic",price:130,rating:4.7,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Natural spray for everyday crop care."},
{id:49,name:"Seed Treatment Powder",cat:"Pesticides",type:"Affordable",price:80,rating:4.5,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Basic seed treatment product for farmers."},
{id:50,name:"Crop Care Powder",cat:"Pesticides",type:"Affordable",price:110,rating:4.5,img:"https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&w=800&q=85",desc:"Affordable crop care powder."},

/* ♻️ ORGANIC PRODUCTS */
{id:51,name:"Organic Compost Pack",cat:"Organic",type:"Organic",price:60,rating:4.7,img:"https://images.unsplash.com/photo-1592982537447-6f2a6a0a7c4b?auto=format&fit=crop&w=800&q=85",desc:"Natural compost for healthy soil."},
{id:52,name:"Vermicompost Small Pack",cat:"Organic",type:"Organic",price:80,rating:4.8,img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=85",desc:"Affordable vermicompost for farmers."},
{id:53,name:"Neem Cake",cat:"Organic",type:"Organic",price:90,rating:4.7,img:"https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=800&q=85",desc:"Natural soil supplement made from neem."},
{id:54,name:"Organic Manure",cat:"Organic",type:"Organic",price:70,rating:4.6,img:"https://images.unsplash.com/photo-1592982537447-6f2a6a0a7c4b?auto=format&fit=crop&w=800&q=85",desc:"Natural manure for improving soil."},
{id:55,name:"Cow Dung Compost",cat:"Organic",type:"Organic",price:50,rating:4.6,img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=85",desc:"Traditional organic manure for farming."},
{id:56,name:"Bio Compost",cat:"Organic",type:"Organic",price:100,rating:4.7,img:"https://images.unsplash.com/photo-1592982537447-6f2a6a0a7c4b?auto=format&fit=crop&w=800&q=85",desc:"Eco-friendly compost for healthy crops."},
{id:57,name:"Organic Soil Booster",cat:"Organic",type:"Organic",price:120,rating:4.6,img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=85",desc:"Natural soil booster for better crop growth."},
{id:58,name:"Natural Plant Food",cat:"Organic",type:"Organic",price:75,rating:4.7,img:"https://images.unsplash.com/photo-1592982537447-6f2a6a0a7c4b?auto=format&fit=crop&w=800&q=85",desc:"Simple natural plant nutrition product."},
{id:59,name:"Organic Mulch Pack",cat:"Organic",type:"Organic",price:110,rating:4.5,img:"https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=85",desc:"Organic mulch for protecting soil moisture."},
{id:60,name:"Farm Organic Starter Pack",cat:"Organic",type:"Organic",price:200,rating:4.8,img:"https://images.unsplash.com/photo-1592982537447-6f2a6a0a7c4b?auto=format&fit=crop&w=800&q=85",desc:"Affordable starter pack for natural farming."}

];

let cart=JSON.parse(localStorage.getItem("agriCart")||"[]");
let wishlist=JSON.parse(localStorage.getItem("agriWish")||"[]");
let orders=JSON.parse(localStorage.getItem("agriOrders")||"[]");
let activeCategory="All", currentUser=JSON.parse(localStorage.getItem("agriUser")||"null");

const $=id=>document.getElementById(id);
function save(){localStorage.setItem("agriCart",JSON.stringify(cart));localStorage.setItem("agriWish",JSON.stringify(wishlist));localStorage.setItem("agriOrders",JSON.stringify(orders));updateBadges()}
function toast(msg){$("toast").textContent=msg;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),2200)}
function navigate(id){
 document.querySelectorAll(".view").forEach(v=>v.classList.add("hidden"));$(id).classList.remove("hidden");
 if(id==="shop")renderShop(); if(id==="cart")renderCart(); if(id==="checkout")renderCheckout(); if(id==="wishlist")renderWishlist(); if(id==="profile")renderProfile(); if(id==="admin"){if(!currentUser||currentUser.role!=="admin"){toast("Please login as admin.");return navigate("home")}adminView("dashboard")}
 window.scrollTo({top:0,behavior:"smooth"});
}
function card(p){
 const wished=wishlist.includes(p.id);
 return `<article class="product-card">
 <button class="wish" onclick="toggleWish(${p.id})">${wished?"❤️":"♡"}</button>
 <img class="product-img" src="${p.img}" alt="${p.name}">
 <div class="product-body">
 <span class="tag">${p.type}</span>
 <h3>${p.name}</h3>
 <p>Good quality ${p.cat.toLowerCase()} for everyday farming needs.</p>
 <div class="rating">★★★★★ <b>${p.rating}</b></div>
 <div class="price">₹${p.price.toLocaleString("en-IN")}</div>
 <div class="card-actions">
 <button class="small-btn" onclick="showProduct(${p.id})">View</button>
 <button class="small-btn primary" onclick="addCart(${p.id})">Add to Cart</button>
 </div>
 </div>
 </article>`
}
function renderFeatured(){$("featuredGrid").innerHTML=products.slice(0,4).map(card).join("")}
function renderTabs(){let cats=["All","Seeds","Fertilizers","Tools","Irrigation","Pesticides","Organic"];$("categoryTabs").innerHTML=cats.map(c=>`<button class="tab ${activeCategory===c?"active":""}" onclick="setCategory('${c}')">${c}</button>`).join("")}
function renderShop(){
 renderTabs();let q=($("shopSearch")?.value||"").toLowerCase(),type=$("typeFilter")?.value||"all",max=Number($("priceRange")?.value||2000);
 let list=products.filter(p=>(activeCategory==="All"||p.cat===activeCategory)&&(p.name.toLowerCase().includes(q)||p.cat.toLowerCase().includes(q))&&(type==="all"||p.type===type)&&p.price<=max);
 let sort=$("sortSelect")?.value||"popular";list.sort((a,b)=>sort==="low"?a.price-b.price:sort==="high"?b.price-a.price:sort==="rating"?b.rating-a.rating:sort==="new"?b.id-a.id:b.rating-a.rating);
 $("productCount").textContent=`${list.length} products found`;$("shopGrid").innerHTML=list.length?list.map(card).join(""):`<div class="card">No products found. Try another filter.</div>`;
}
function setCategory(c){activeCategory=c;renderShop()}
function shopCategory(c){activeCategory=c;navigate("shop")}
function resetFilters(){activeCategory="All";$("shopSearch").value="";$("typeFilter").value="all";$("priceRange").value=2000;$("priceLabel").textContent="₹2,000";renderShop()}
function globalSearch(q){if(q.length>1){navigate("shop");$("shopSearch").value=q;renderShop()}}
function showProduct(id){let p=products.find(x=>x.id===id);$("productDetail").innerHTML=`<div class="detail"><img src="${p.img}" alt="${p.name}"><div><span class="tag">${p.tag}</span><h1>${p.name}</h1><div class="rating">★★★★★ ${p.rating}</div><p class="description">${p.desc}</p><h2>₹${p.price.toLocaleString("en-IN")}</h2><div class="quantity"><button onclick="changeDetailQty(-1)">−</button><span id="detailQty">1</span><button onclick="changeDetailQty(1)">+</button></div><button class="btn primary" onclick="addCart(${p.id},Number($('detailQty').textContent))">Add to Cart 🛒</button><button class="btn secondary" style="margin-left:8px" onclick="toggleWish(${p.id})">❤️ Wishlist</button><hr><p class="description">✓ Quality checked &nbsp; ✓ Farmer-friendly pricing &nbsp; ✓ Secure checkout</p></div></div>`;navigate("product")}
function changeDetailQty(n){let x=Math.max(1,Number($("detailQty").textContent)+n);$("detailQty").textContent=x}
function addCart(id,qty=1){let p=products.find(x=>x.id===id),item=cart.find(x=>x.id===id);if(item)item.qty+=qty;else cart.push({id,qty});save();toast(`${p.name} added to cart 🛒`)}
function toggleWish(id){let i=wishlist.indexOf(id);if(i>=0){wishlist.splice(i,1);toast("Removed from wishlist")}else{wishlist.push(id);toast("Added to wishlist ❤️")}save();if(!$("shop").classList.contains("hidden"))renderShop();if(!$("wishlist").classList.contains("hidden"))renderWishlist()}
function updateBadges(){$("cartBadge").textContent=cart.reduce((s,x)=>s+x.qty,0);$("wishBadge").textContent=wishlist.length}
function cartRows(){return cart.map(item=>{let p=products.find(x=>x.id===item.id);return `<div class="cart-item"><img src="${p.img}"><div><b>${p.name}</b><small style="display:block;color:#6c756a">₹${p.price.toLocaleString("en-IN")} each</small><div><button onclick="changeCart(${p.id},-1)">−</button> ${item.qty} <button onclick="changeCart(${p.id},1)">+</button></div></div><b>₹${(p.price*item.qty).toLocaleString("en-IN")}</b></div>`}).join("")}
function subtotal(){return cart.reduce((s,i)=>{let p=products.find(x=>x.id===i.id);return s+p.price*i.qty},0)}
function renderCart(){$("cartPage").innerHTML=`<h1>Your Cart 🛒</h1>${cart.length?`<div class="cart-layout"><div class="card">${cartRows()}</div><div class="card summary"><h3>Cart Summary</h3><div class="sumrow"><span>Subtotal</span><b>₹${subtotal().toLocaleString("en-IN")}</b></div><div class="sumrow"><span>Delivery</span><span>FREE</span></div><div class="sumrow total"><span>Total</span><b>₹${subtotal().toLocaleString("en-IN")}</b></div><button class="btn primary full" onclick="navigate('checkout')">Proceed to Checkout →</button></div></div>`:`<div class="card center"><h2>Your cart is empty</h2><button class="btn primary" onclick="navigate('shop')">Start Shopping</button></div>`}`}
function changeCart(id,n){let x=cart.find(i=>i.id===id);x.qty+=n;if(x.qty<=0)cart=cart.filter(i=>i.id!==id);save();renderCart()}
function renderCheckout(){if(!cart.length){toast("Your cart is empty");return navigate("shop")}$("checkoutItems").innerHTML=cartRows();$("coSubtotal").textContent="₹"+subtotal().toLocaleString("en-IN");$("coTotal").textContent="₹"+subtotal().toLocaleString("en-IN")}
function placeOrder(){if(!cart.length)return;let order={id:"AGR"+Date.now().toString().slice(-6),items:[...cart],total:subtotal(),date:new Date().toLocaleDateString(),status:"Processing"};orders.unshift(order);cart=[];save();toast("Order placed successfully! 🌾");setTimeout(()=>navigate("profile"),500)}
function renderWishlist(){$("wishlistGrid").innerHTML=wishlist.length?wishlist.map(id=>card(products.find(p=>p.id===id))).join(""):`<div class="card">Your wishlist is empty.</div>`}
function renderProfile(){$("profileName").textContent=currentUser?.name||"Farmer User";$("orderCount").textContent=orders.length;$("wishCount").textContent=wishlist.length}
function openLogin(){$("loginModal").classList.remove("hidden")}function closeLogin(){$("loginModal").classList.add("hidden")}
function login(){let email=$("loginEmail").value;currentUser={name:email.split("@")[0].replace(/[._]/g," "),email,role:"customer"};localStorage.setItem("agriUser",JSON.stringify(currentUser));closeLogin();updateAuth();toast("Signed in successfully")}
function loginDemo(role){currentUser=role==="admin"?{name:"AgriNest Admin",email:"admin@agrinest.example",role:"admin"}:{name:"Farmer User",email:"farmer@example.com",role:"customer"};localStorage.setItem("agriUser",JSON.stringify(currentUser));closeLogin();updateAuth();toast(role==="admin"?"Admin mode enabled 🛡️":"Customer mode enabled 👨‍🌾")}
function logout(){currentUser=null;localStorage.removeItem("agriUser");updateAuth();navigate("home");toast("Signed out")}
function updateAuth(){let b=$("authBtn");b.textContent=currentUser?`👤 ${currentUser.name.split(" ")[0]}`:"👤 Sign In";$("adminLink").classList.toggle("hidden",currentUser?.role!=="admin")}
function resetDemo(){localStorage.clear();location.reload()}
function toggleTheme(){document.body.classList.toggle("dark");toast("Theme toggled")}
function copyCode(){navigator.clipboard?.writeText("FARM20");toast("Coupon FARM20 copied!")}
function showTip(){toast("Tip: Test your soil before choosing fertilizers.")}
function sendMessage(){toast("Thank you! Your message has been sent.")}
function subscribe(){let v=$("newsEmail").value;if(v){$("newsEmail").value="";toast("Subscribed! 🌱")}}
function adminView(view){
 let main=$("adminMain");
 if(view==="dashboard"){main.innerHTML=`<h1>Admin Dashboard</h1><div class="admin-stats"><div class="admin-stat">📦<b>${products.length}</b><small>Total Products</small></div><div class="admin-stat">🧾<b>${orders.length}</b><small>Total Orders</small></div><div class="admin-stat">👥<b>128</b><small>Customers</small></div><div class="admin-stat">₹<b>${orders.reduce((s,o)=>s+o.total,0).toLocaleString("en-IN")}</b><small>Sales</small></div></div><div class="card" style="margin-top:20px"><h3>Recent Orders</h3>${orders.length?`<table><tr><th>Order</th><th>Date</th><th>Total</th><th>Status</th></tr>${orders.slice(0,6).map(o=>`<tr><td>${o.id}</td><td>${o.date}</td><td>₹${o.total}</td><td>${o.status}</td></tr>`).join("")}</table>`:"<p>No orders yet.</p>"}</div>`}
 if(view==="products"){main.innerHTML=`<h1>Product Management</h1><div class="card"><table><tr><th>Product</th><th>Category</th><th>Price</th><th>Rating</th></tr>${products.map(p=>`<tr><td>${p.name}</td><td>${p.cat}</td><td>₹${p.price}</td><td>⭐ ${p.rating}</td></tr>`).join("")}</table></div>`}
 if(view==="orders"){main.innerHTML=`<h1>Order Management</h1><div class="card"><table><tr><th>Order</th><th>Date</th><th>Total</th><th>Status</th></tr>${orders.length?orders.map(o=>`<tr><td>${o.id}</td><td>${o.date}</td><td>₹${o.total}</td><td>${o.status}</td></tr>`).join(""):"<tr><td colspan=4>No orders yet.</td></tr>"}</table></div>`}
 if(view==="customers"){main.innerHTML=`<h1>Customer Management</h1><div class="card"><table><tr><th>Name</th><th>Email</th><th>Role</th></tr><tr><td>Farmer User</td><td>farmer@example.com</td><td>Customer</td></tr><tr><td>AgriNest Admin</td><td>admin@agrinest.example</td><td>Admin</td></tr></table></div>`}
}
document.querySelectorAll(".payment").forEach(x=>x.onclick=()=>{document.querySelectorAll(".payment").forEach(y=>y.classList.remove("active"));x.classList.add("active")});
renderFeatured();updateBadges();updateAuth();renderShop();


