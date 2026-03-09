function loadEquipmentDetails(id) {
    var eq = equipmentData.find(function (e) { return e.id === id; });
    if (!eq) return;

    var imgEl = document.getElementById('detailImage');
    if (imgEl) imgEl.src = eq.image;

    var catEl = document.getElementById('detailCategory');
    if (catEl) catEl.textContent = eq.category;

    var nameEl = document.getElementById('detailName');
    if (nameEl) nameEl.textContent = eq.name;

    var descEl = document.getElementById('detailDesc');
    if (descEl) descEl.textContent = eq.description;

    var priceEl = document.getElementById('detailPrice');
    if (priceEl) priceEl.innerHTML = '₹' + eq.dailyRate + ' <span>/ day</span>';

    var specsContainer = document.getElementById('detailSpecs');
    if (specsContainer) {
        specsContainer.innerHTML = '';
        var keys = Object.keys(eq.specs);
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var label = key.replace(/([A-Z])/g, ' $1').replace(/^./, function (s) { return s.toUpperCase(); });
            var div = document.createElement('div');
            div.className = 'spec-box';
            div.innerHTML = '<div class="spec-box-label">' + label + '</div><div class="spec-box-value">' + eq.specs[key] + '</div>';
            specsContainer.appendChild(div);
        }
    }

    var ratesEl = document.getElementById('detailRates');
    if (ratesEl) {
        ratesEl.innerHTML =
            '<div class="summary-row"><span class="summary-label">Daily Rate</span><span class="summary-value">₹' + eq.dailyRate + '</span></div>' +
            '<div class="summary-row"><span class="summary-label">Weekly Rate</span><span class="summary-value">₹' + eq.weeklyRate + '</span></div>' +
            '<div class="summary-row"><span class="summary-label">Monthly Rate</span><span class="summary-value">₹' + eq.monthlyRate + '</span></div>';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var equipmentSelect = document.getElementById('equipmentSelectDetail');
    if (equipmentSelect) {

        var urlParams = new URLSearchParams(window.location.search);
        var idParam = urlParams.get('id');
        var startId = idParam ? parseInt(idParam) : 1;

        equipmentSelect.value = String(startId);

        equipmentSelect.addEventListener('change', function () {
            var id = parseInt(this.value);
            loadEquipmentDetails(id);
        });

        loadEquipmentDetails(startId);
    }
});
