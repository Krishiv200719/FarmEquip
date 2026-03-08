function calculateRentalCost() {
    var eqSelect = document.getElementById('calcEquipment');
    var daysInput = document.getElementById('calcDays');
    var result = document.getElementById('calcResult');

    if (!eqSelect || !daysInput || !result) return;

    var eqId = parseInt(eqSelect.value);
    var days = parseInt(daysInput.value);

    if (!days || days < 1) {
        alert('Please enter a valid number of days (minimum 1).');
        return;
    }

    var eq = equipmentData.find(function (e) { return e.id === eqId; });
    if (!eq) return;

    var baseCost = days * eq.dailyRate;

    var discount = 0;
    var packageName = 'No package applied';
    for (var j = 0; j < seasonalPackages.length; j++) {
        var pkg = seasonalPackages[j];
        if (days >= pkg.minDays) {
            discount = pkg.discount;
            packageName = pkg.name + ' (' + pkg.discount + '% off)';
        }
    }

    var discountAmount = baseCost * (discount / 100);
    var totalCost = baseCost - discountAmount;

    result.innerHTML =
        '<div class="summary-row"><span class="summary-label">Equipment</span><span class="summary-value">' + eq.name + '</span></div>' +
        '<div class="summary-row"><span class="summary-label">Rental Duration</span><span class="summary-value">' + days + ' days</span></div>' +
        '<div class="summary-row"><span class="summary-label">Daily Rate</span><span class="summary-value">₹' + eq.dailyRate + '</span></div>' +
        '<div class="summary-row"><span class="summary-label">Base Cost</span><span class="summary-value">₹' + baseCost.toLocaleString() + '</span></div>' +
        '<div class="summary-row"><span class="summary-label">Seasonal Package</span><span class="summary-value">' + packageName + '</span></div>' +
        (discount > 0 ? '<div class="summary-row"><span class="summary-label">Discount</span><span class="summary-value" style="color: var(--green-600);">-₹' + discountAmount.toLocaleString() + '</span></div>' : '') +
        '<div class="summary-row total"><span class="summary-label">Total Cost</span><span class="summary-value">₹' + totalCost.toLocaleString() + '</span></div>';

    result.classList.add('visible');
}

document.addEventListener('DOMContentLoaded', function () {
    var calcBtn = document.getElementById('calculateCost');
    if (calcBtn) {
        calcBtn.addEventListener('click', calculateRentalCost);
    }
});
