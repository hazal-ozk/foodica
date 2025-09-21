const RECIPES = [
  { title: 'Karnıyarık', slug: 'kategori-anaYemekler.html#karniyarik', tags: ['patlıcan','kıymalı','fırın'] },
  { title: 'Fırında Tavuk ve Patates', slug: 'kategori-anaYemekler.html#firinda-tavuk', tags: ['tavuk','patates','fırın'] },
  { title: 'Kuru Fasulye', slug: 'kategori-anaYemekler.html#kuru-fasulye', tags: ['baklagil','fasulye','pastırma'] },
  { title: 'Et Sote', slug: 'kategori-anaYemekler.html#et-sote', tags: ['et','sebzeli','pratik'] },
  { title: 'İrmik Helvası', slug: 'kategori-tatlilar.html#irmik-helvasi', tags: ['tatlı','irmik'] },
  { title: 'Revani', slug: 'kategori-tatlilar.html#revani', tags: ['şerbetli','irmikli','tatlı'] },
  { title: 'Sütlaç', slug: 'kategori-tatlilar.html#sutlac', tags: ['sütlü tatlı','fırın','pirinç','süt'] },
  { title: 'Mozaik Pasta', slug: 'kategori-tatlilar.html#mozaik-pasta', tags: ['bisküvili','tatlı','çikolatalı','soğuk'] },
  { title: 'Patates Kroket', slug: 'kategori-atistirmaliklar.html#patates-kroket', tags: ['atıştırmalık','patates','kızartma','aperatif'] },
  { title: 'Mozzarella Çubukları', slug: 'kategori-atistirmaliklar.html#mozzarella-cubuklari', tags: ['peynir','atıştırmalık','kızartma','çıtır'] },
  { title: 'Kabak Cips', slug: 'kategori-atistirmaliklar.html#kabak-cips', tags: ['kabak','fırın','sağlıklı','atıştırmalık'] },
  { title: 'Mini Pide', slug: 'kategori-atistirmaliklar.html#mini-pide', tags: ['hamur işi','mini','atıştırmalık','fırın'] },
  { title: 'Karides Güveç', slug: 'kategori-deniz-urunleri.html#karides-guvec', tags: ['karides','deniz ürünleri','güveç','fırın'] },
  { title: 'Kalamar Tava', slug: 'kategori-deniz-urunleri.html#kalamar-tava', tags: ['kalamar','kızartma','deniz ürünleri'] },
  { title: 'Levrek Buğulama', slug: 'kategori-deniz-urunleri.html#levrek-bugulama', tags: ['levrek','buğulama','sağlıklı','balık'] },
  { title: 'Midye Dolma', slug: 'kategori-deniz-urunleri.html#midye-dolma', tags: ['midye','iç pilav','sokak lezzeti','deniz ürünleri'] },
  { title: 'Ev Yapımı Limonata', slug: 'kategori-icecekler.html#limonata', tags: ['limon', 'serinletici', 'yaz'] },
  { title: 'Soğuk Kahve', slug: 'kategori-icecekler.html#ice-coffee', tags: ['kahve', 'buzlu', 'yaz'] },
  { title: 'Çilekli Smoothie', slug: 'kategori-icecekler.html#smoothie-cilek', tags: ['çilek', 'smoothie', 'sağlıklı'] },
  { title: 'Salatalıklı Ayran', slug: 'kategori-icecekler.html#salatalik-ayran', tags: ['ayran', 'salatalık', 'ferahlatıcı'] },
  { title: 'Menemen', slug: 'kategori-kahvalti.html#menemen', tags: ['yumurta', 'domates', 'biber'] },
  { title: 'Peynirli Börek', slug: 'kategori-kahvalti.html#peynirli-borek', tags: ['börek', 'peynir', 'hamur işi'] },
  { title: 'Akdeniz Kahvaltı Tabağı', slug: 'kategori-kahvalti.html#akdeniz-salata', tags: ['zeytin', 'peynir', 'sağlıklı'] },
  { title: 'Krep', slug: 'kategori-kahvalti.html#krep', tags: ['krep', 'kahvaltı', 'pratik'] },
  { title: 'Çoban Salata', slug: 'kategori-salatalar.html#coban-salata', tags: ['domates', 'salatalık', 'soğan', 'klasik'] },
  { title: 'Kısır', slug: 'kategori-salatalar.html#kisir', tags: ['bulgur', 'yeşillik', 'nar ekşisi'] },
  { title: 'Sezar Salata', slug: 'kategori-salatalar.html#sezar-salata', tags: ['tavuk', 'kruton', 'parmesan', 'sezar sos'] },
  { title: 'Pancar Salatası', slug: 'kategori-salatalar.html#pancar-salata', tags: ['pancar', 'yoğurt', 'sarımsak', 'ceviz'] },
  { title: 'Mercimek Köftesi', slug: 'kategori-vegan.html#mercimek-koftesi', tags: ['mercimek', 'bulgur', 'vegan', 'köfte'] },
  { title: 'Nohut Sote', slug: 'kategori-vegan.html#nohut-sote', tags: ['nohut', 'sebze', 'protein', 'vegan'] },
  { title: 'Sebzeli Kuskus', slug: 'kategori-vegan.html#sebzeli-kuskus', tags: ['kuskus', 'sebzeli', 'hafif', 'vegan'] },
  { title: 'Avokado Tost', slug: 'kategori-vegan.html#avokado-tost', tags: ['avokado', 'kahvaltı', 'tost', 'vegan'] },
  { title: 'Hamburger', slug: 'kategori-atistirmalik.html#hamburger', tags: ['hamburger', 'atıştırmalık'] },
  { title: 'Pizza', slug: 'kategori-atistirmalik.html#pizza', tags: ['pizza', 'atıştırmalık'] },
  { title: 'Kebap', slug: 'kategori-anaYemekler.html#kebap', tags: ['kebap', 'anayemek','et'] },
  { title: 'Kıymalı Omlet', slug: 'kategori-kahvalti.html#kiymali-omlet', tags: ['omlet', 'kıyma','kahvaltı'] },
  { title: 'Salçalı Makarna', slug: 'kategori-anaYemekler.html#makarna', tags: ['makarna', 'anayemek','salça'] }
];







  const fuse = new Fuse(RECIPES, {
    includeScore: true,
    threshold: 0.4,
    keys: ['title', 'tags']
  });

  const form = document.getElementById('recipeSearchForm');
  const input = document.getElementById('recipeSearchInput');
  const resultsBox = document.getElementById('searchResults');
  let lastResults = [];

  function renderResults(results){
    resultsBox.innerHTML = '';
    if (!results.length) {
      resultsBox.classList.add('d-none');
      return;
    }
    results.slice(0, 6).forEach(r => {
      const a = document.createElement('a');
      a.href = r.item.slug;
      a.className = 'list-group-item list-group-item-action';
      a.textContent = r.item.title;
      resultsBox.appendChild(a);
    });
    resultsBox.classList.remove('d-none');
  }

  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (q.length < 2) {
      resultsBox.classList.add('d-none');
      return;
    }
    lastResults = fuse.search(q);
    renderResults(lastResults);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (lastResults.length > 0) {
      window.location.href = lastResults[0].item.slug;
    }
  });

  input.addEventListener('blur', () => setTimeout(() => resultsBox.classList.add('d-none'), 200));
  resultsBox.addEventListener('mousedown', e => e.preventDefault());



