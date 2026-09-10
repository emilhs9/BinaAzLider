const params = new URLSearchParams(window.location.search);
const container = document.getElementById("detailContainer");
const id = params.get("id");

const binalar = [
  { id: 1, tip: "Yeni tikili", author: "Resaddd", otaq: "3 otaqlı", qiymet: 185000, il: 2021, sahe: 92, mertebe: 7, sened: "Kupça", temir: "Təmirli", menzere: "Şəhər mənzərəli", esya: "Əşyalı", rayon: "Nəsimi", sekil: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop" },
  { id: 2, tip: "Köhnə tikili", author: "Resaddd", otaq: "2 otaqlı", qiymet: 96000, il: 1998, sahe: 55, mertebe: 3, sened: "Müqavilə", temir: "Orta təmir", menzere: "Həyət mənzərəli", esya: "Əşyasız", rayon: "Gəncə", sekil: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop" },
  { id: 3, tip: "Həyət evi", author: "Resaddd", otaq: "5 otaqlı", qiymet: 320000, il: 2019, sahe: 180, mertebe: 2, sened: "Kupça", temir: "Təmirli", menzere: "Bağ mənzərəli", esya: "Əşyalı", rayon: "Gəncə", sekil: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=250&fit=crop" },
  { id: 4, tip: "Yeni tikili", author: "Resaddd", otaq: "1 otaqlı", qiymet: 78000, il: 2020, sahe: 48, mertebe: 12, sened: "Kupça", temir: "Təmirsiz", menzere: "Dəniz mənzərəli", esya: "Əşyasız", rayon: "Xətai", sekil: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=250&fit=crop" },
  { id: 5, tip: "Yeni tikili", author: "Resaddd", otaq: "4 otaqlı", qiymet: 265000, il: 2024, sahe: 128, mertebe: 9, sened: "Kupça", temir: "Təmirli", menzere: "Şəhər mənzərəli", esya: "Əşyalı", rayon: "Yasamal", sekil: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop" },
  { id: 6, tip: "Köhnə tikili", author: "Resaddd", otaq: "3 otaqlı", qiymet: 142000, il: 2005, sahe: 78, mertebe: 5, sened: "Kupça", temir: "Orta təmir", menzere: "Həyət mənzərəli", esya: "Əşyalı", rayon: "Nərimanov", sekil: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=250&fit=crop" },
  { id: 7, tip: "Həyət evi", author: "Resaddd", otaq: "6 otaqlı", qiymet: 450000, il: 2022, sahe: 240, mertebe: 3, sened: "Kupça", temir: "Təmirli", menzere: "Bağ mənzərəli", esya: "Əşyalı", rayon: "Abşeron", sekil: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop" },
  { id: 8, tip: "Yeni tikili", author: "Resaddd", otaq: "2 otaqlı", qiymet: 118000, il: 2023, sahe: 68, mertebe: 14, sened: "Kupça", temir: "Təmirli", menzere: "Dəniz mənzərəli", esya: "Əşyasız", rayon: "Sumqayıt", sekil: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&h=250&fit=crop" },
  { id: 9, tip: "Bağ evi", author: "Resaddd", otaq: "4 otaqlı", qiymet: 155000, il: 2013, sahe: 145, mertebe: 2, sened: "Müqavilə", temir: "Orta təmir", menzere: "Bağ mənzərəli", esya: "Əşyasız", rayon: "Sumqayıt", sekil: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop" },
  { id: 10, tip: "Köhnə tikili", author: "Resaddd", otaq: "3 otaqlı", qiymet: 134000, il: 2008, sahe: 82, mertebe: 6, sened: "Kupça", temir: "Təmirsiz", menzere: "Şəhər mənzərəli", esya: "Əşyasız", rayon: "Gəncə", sekil: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&h=250&fit=crop" },
  { id: 11, tip: "Yeni tikili", author: "Resaddd", otaq: "1 otaqlı", qiymet: 72000, il: 2021, sahe: 45, mertebe: 8, sened: "Kupça", temir: "Təmirli", menzere: "Həyət mənzərəli", esya: "Əşyalı", rayon: "Mingəçevir", sekil: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&h=250&fit=crop" },
  { id: 12, tip: "Həyət evi", author: "Resaddd", otaq: "5 otaqlı", qiymet: 380000, il: 2018, sahe: 200, mertebe: 2, sened: "Kupça", temir: "Təmirli", menzere: "Bağ mənzərəli", esya: "Əşyalı", rayon: "Bakı", sekil: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=250&fit=crop" },
  { id: 13, tip: "Köhnə tikili", author: "Resaddd", otaq: "2 otaqlı", qiymet: 88000, il: 2001, sahe: 52, mertebe: 4, sened: "Müqavilə", temir: "Orta təmir", menzere: "Şəhər mənzərəli", esya: "Əşyasız", rayon: "Lənkəran", sekil: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=250&fit=crop" },
  { id: 14, tip: "Yeni tikili", author: "Resaddd", otaq: "4 otaqlı", qiymet: 298000, il: 2022, sahe: 135, mertebe: 16, sened: "Kupça", temir: "Təmirli", menzere: "Dəniz mənzərəli", esya: "Əşyalı", rayon: "Bakı", sekil: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop" },
  { id: 15, tip: "Bağ evi", author: "Resaddd", otaq: "3 otaqlı", qiymet: 128000, il: 2013, sahe: 110, mertebe: 2, sened: "Müqavilə", temir: "Təmirsiz", menzere: "Bağ mənzərəli", esya: "Əşyasız", rayon: "Şirvan", sekil: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=250&fit=crop" },
  { id: 16, tip: "Yeni tikili", author: "Resaddd", otaq: "3 otaqlı", qiymet: 176000, il: 2020, sahe: 88, mertebe: 11, sened: "Kupça", temir: "Təmirli", menzere: "Şəhər mənzərəli", esya: "Əşyalı", rayon: "Yasamal", sekil: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=250&fit=crop" },
  { id: 17, tip: "Köhnə tikili", author: "Resaddd", otaq: "2 otaqlı", qiymet: 102000, il: 2006, sahe: 60, mertebe: 7, sened: "Kupça", temir: "Orta təmir", menzere: "Həyət mənzərəli", esya: "Əşyasız", rayon: "Nəsimi", sekil: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=250&fit=crop" },
  { id: 18, tip: "Həyət evi", author: "Resaddd", otaq: "6 otaqlı", qiymet: 520000, il: 2023, sahe: 280, mertebe: 3, sened: "Kupça", temir: "Təmirli", menzere: "Bağ mənzərəli", esya: "Əşyalı", rayon: "Abşeron", sekil: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=250&fit=crop" },
  { id: 19, tip: "Yeni tikili", author: "Resaddd", otaq: "1 otaqlı", qiymet: 69000, il: 2019, sahe: 44, mertebe: 5, sened: "Kupça", temir: "Təmirsiz", menzere: "Şəhər mənzərəli", esya: "Əşyasız", rayon: "Xətai", sekil: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?w=400&h=250&fit=crop" },
  { id: 20, tip: "Köhnə tikili", author: "Resaddd", otaq: "3 otaqlı", qiymet: 138000, il: 2003, sahe: 76, mertebe: 4, sened: "Müqavilə", temir: "Orta təmir", menzere: "Həyət mənzərəli", esya: "Əşyalı", rayon: "Nərimanov", sekil: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=250&fit=crop" }
];

const bina = binalar.find((item) => item.id === parseInt(id));

if (bina) {
    container.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">

      <!-- Sol tərəf -->
      <div class="lg:col-span-2">

        <!-- Şəkil -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <img src="${bina.sekil}"
               alt="Ev" class="w-full h-96 object-cover">
        </div>

        <!-- Xüsusiyyətlər -->
        <div class="bg-white rounded-xl shadow-sm mt-6 p-6">
          <h2 class="text-lg font-bold text-gray-800 mb-4">Xüsusiyyətlər</h2>
          <div class="grid grid-cols-2 gap-y-4 text-sm">
            <p class="text-gray-500">Əmlakın növü</p>  <p class="text-gray-800 font-medium">${bina.tip}</p>
            <p class="text-gray-500">Otaq sayı</p>     <p class="text-gray-800 font-medium">${bina.otaq}</p>
            <p class="text-gray-500">Sahə</p>          <p class="text-gray-800 font-medium">${bina.sahe} m²</p>
            <p class="text-gray-500">Mərtəbə</p>        <p class="text-gray-800 font-medium">${bina.mertebe}-ci mərtəbə</p>
            <p class="text-gray-500">Tikili ili</p>    <p class="text-gray-800 font-medium">${bina.il}</p>
            <p class="text-gray-500">Təmir</p>          <p class="text-gray-800 font-medium">${bina.temir}</p>
            <p class="text-gray-500">Sənəd</p>          <p class="text-gray-800 font-medium">${bina.sened}</p>
            <p class="text-gray-500">Əşya</p>           <p class="text-gray-800 font-medium">${bina.esya}</p>
            <p class="text-gray-500">Mənzərə</p>        <p class="text-gray-800 font-medium">${bina.menzere}</p>
            <p class="text-gray-500">Yerləşmə</p>       <p class="text-gray-800 font-medium">${bina.rayon}</p>
          </div>
        </div>

        <!-- Təsvir -->
        <div class="bg-white rounded-xl shadow-sm mt-6 p-6">
          <h2 class="text-lg font-bold text-gray-800 mb-3">Təsvir</h2>
          <p class="text-gray-600 text-sm leading-relaxed">
            Şəhərin mərkəzində, tam təmirli, işıqlı və geniş mənzil satılır.
            Yaxınlıqda metro, market və məktəb yerləşir. Sənədlər qaydasındadır,
            kupça hazırdır. Köçməyə hazır vəziyyətdədir.
          </p>
        </div>

      </div>

      <!-- Sağ tərəf: qiymət + əlaqə -->
      <div>
        <div class="bg-white rounded-xl shadow-sm p-6 sticky top-6">
          <h1 class="text-xl font-bold text-gray-800">${bina.tip} • ${bina.otaq}</h1>
          <p class="text-emerald-600 font-extrabold text-3xl mt-3">${bina.qiymet} ₼</p>
          <p class="text-gray-500 text-sm mt-2">${bina.sahe} m² • ${bina.mertebe}-ci mərtəbə • ${bina.rayon}</p>

          <div class="mt-6 border-t border-gray-100 pt-4">
            <p class="text-gray-500 text-sm">Sahibkar</p>
            <p class="text-gray-800 font-medium">${bina.author}</p>
            <p class="text-emerald-600 font-bold text-lg mt-2">(050) 123-45-67</p>
          </div>

          <button class="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-semibold mt-4">
            Zəng et
          </button>
          <button class="w-full border border-emerald-600 text-emerald-600 hover:bg-emerald-50 py-3 rounded-lg font-semibold mt-3">
            ♡ Seçilmişlərə əlavə et
          </button>
        </div>
      </div>

    </div>  
    `
}
