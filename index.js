const container = document.getElementById("container");
const tip = document.getElementById("tip");
const otaq = document.getElementById("otaq");
const rayon = document.getElementById("rayon");
const search = document.getElementById("search");

function qiymetGoster(qiymet) {
  return new Intl.NumberFormat("az-AZ").format(qiymet);
}

function elanlariGoster(data) {
  container.innerHTML = "";

  if (!data.length) {
    container.innerHTML = '<div class="col-span-full bg-white rounded-xl p-10 text-center text-gray-500">Elan tapılmadı</div>';
    return;
  }

  data.forEach(ev => {
    const kart = document.createElement("div");
    kart.className = "bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden cursor-pointer border border-gray-100";
    kart.innerHTML = `
      <div class="relative">
        <img src="${ev.sekil}" alt="Ev" class="w-full h-48 object-cover">
        <span class="absolute top-3 left-3 bg-black/60 text-white text-xs px-2.5 py-1 rounded-md">${ev.seher}</span>
      </div>
      <div class="p-4">
        <p class="text-emerald-600 font-bold text-xl">${qiymetGoster(ev.qiymet)} ₼</p>
        <h3 class="font-semibold text-gray-800 mt-1.5">${ev.marka} • ${ev.model}</h3>
        <p class="text-gray-500 text-sm mt-1">${ev.muherrik} m² • ${ev.yurus}-ci mərtəbə • ${ev.il}</p>
        <div class="flex gap-2 mt-3 flex-wrap">
          <span class="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md">${ev.ban}</span>
          <span class="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">${ev.yanacaq}</span>
          <span class="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">${ev.suret}</span>
        </div>
      </div>`;
    kart.onclick = () => location.href = `elan.html?id=${ev.id}`;
    container.appendChild(kart);
  });
}

function secimleriDoldur() {
  [...new Set(home.map(ev => ev.marka))].forEach(x => tip.innerHTML += `<option value="${x}">${x}</option>`);
  [...new Set(home.map(ev => ev.model))].forEach(x => otaq.innerHTML += `<option value="${x}">${x}</option>`);
  [...new Set(home.map(ev => ev.seher))].forEach(x => rayon.innerHTML += `<option value="${x}">${x}</option>`);
}

function filtrele() {
  const axtaris = search.value.toLowerCase().trim();
  const min = Number(document.querySelectorAll('input')[0].value) || 0;
  const max = Number(document.querySelectorAll('input')[1].value) || Infinity;
  const sened = document.querySelectorAll('select')[3].value;
  const temir = document.querySelectorAll('select')[4].value;

  const netice = home.filter(ev =>
    (!tip.value || ev.marka === tip.value) &&
    (!otaq.value || ev.model === otaq.value) &&
    (!rayon.value || ev.seher === rayon.value) &&
    ev.qiymet >= min * 1000 &&
    ev.qiymet <= max * 1000 &&
    (!sened || sened === "Sənəd növü" || ev.yanacaq === sened) &&
    (!temir || temir === "Təmir" || ev.ban === temir) &&
    (!axtaris || `${ev.marka} ${ev.model} ${ev.seher} ${ev.ban} ${ev.reng}`.toLowerCase().includes(axtaris))
  );

  elanlariGoster(netice);
}

tip.onchange = filtrele;
otaq.onchange = filtrele;
rayon.onchange = filtrele;
search.oninput = filtrele;
document.querySelectorAll('input')[0].oninput = filtrele;
document.querySelectorAll('input')[1].oninput = filtrele;
document.querySelectorAll('select')[3].onchange = filtrele;
document.querySelectorAll('select')[4].onchange = filtrele;

secimleriDoldur();
elanlariGoster(home);