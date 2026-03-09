function checkEquipmentAvailability() {
    var eqSelect = document.getElementById('equipmentSelect');
    var startInput = document.getElementById('startDate');
    var endInput = document.getElementById('endDate');
    var summary = document.getElementById('bookingSummary');

    if (!eqSelect || !startInput || !endInput || !summary) return;

    var eqId = parseInt(eqSelect.value);
    var startDate = startInput.value;
    var endDate = endInput.value;

    if (!startDate || !endDate) {
        alert('Please select both start and end dates.');
        return;
    }

    var start = new Date(startDate);
    var end = new Date(endDate);
    var today = new Date();
    today.setHours(0, 0, 0, 0);

    if (start < today) {
        alert('Start date cannot be in the past.');
        return;
    }

    if (end <= start) {
        alert('End date must be after the start date.');
        return;
    }

    var eq = equipmentData.find(function (e) { return e.id === eqId; });
    if (!eq) return;

    var isBooked = false;
    for (var i = 0; i < eq.bookedDates.length; i++) {
        var booked = eq.bookedDates[i];
        var bStart = new Date(booked.start);
        var bEnd = new Date(booked.end);
        if (start <= bEnd && end >= bStart) {
            isBooked = true;
            break;
        }
    }

    var diffTime = Math.abs(end - start);
    var days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    var baseCost = days * eq.dailyRate;

    var discount = 0;
    var packageName = 'None';
    for (var j = 0; j < seasonalPackages.length; j++) {
        var pkg = seasonalPackages[j];
        if (days >= pkg.minDays) {
            discount = pkg.discount;
            packageName = pkg.name + ' (' + pkg.discount + '% off)';
        }
    }

    var discountAmount = baseCost * (discount / 100);
    var totalCost = baseCost - discountAmount;

    var statusDiv = document.getElementById('availStatus');
    var summaryDetails = document.getElementById('summaryDetails');
    var placeholder = document.getElementById('summaryPlaceholder');
    var resultDiv = document.getElementById('summaryResult');

    if (isBooked) {
        statusDiv.className = 'status-booked';
        statusDiv.innerHTML = '⚠ Equipment is <strong>NOT AVAILABLE</strong> for the selected dates. Please choose different dates.';
    } else {
        statusDiv.className = 'status-available';
        statusDiv.innerHTML = '✓ Equipment is <strong>AVAILABLE</strong> for the selected dates!';
    }

    summaryDetails.innerHTML =
        '<div class="summary-row"><span class="summary-label">Equipment</span><span class="summary-value">' + eq.name + '</span></div>' +
        '<div class="summary-row"><span class="summary-label">Start Date</span><span class="summary-value">' + formatDate(start) + '</span></div>' +
        '<div class="summary-row"><span class="summary-label">End Date</span><span class="summary-value">' + formatDate(end) + '</span></div>' +
        '<div class="summary-row"><span class="summary-label">Duration</span><span class="summary-value">' + days + ' days</span></div>' +
        '<div class="summary-row"><span class="summary-label">Daily Rate</span><span class="summary-value">₹' + eq.dailyRate + '</span></div>' +
        '<div class="summary-row"><span class="summary-label">Base Cost</span><span class="summary-value">₹' + baseCost.toLocaleString() + '</span></div>' +
        '<div class="summary-row"><span class="summary-label">Seasonal Package</span><span class="summary-value">' + packageName + '</span></div>' +
        (discount > 0 ? '<div class="summary-row"><span class="summary-label">Discount</span><span class="summary-value" style="color: var(--green-600);">-₹' + discountAmount.toLocaleString() + '</span></div>' : '') +
        '<div class="summary-row total"><span class="summary-label">Total Cost</span><span class="summary-value">₹' + totalCost.toLocaleString() + '</span></div>';

    placeholder.style.display = 'none';
    resultDiv.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    var checkAvailBtn = document.getElementById('checkAvailability');
    if (checkAvailBtn) {
        checkAvailBtn.addEventListener('click', checkEquipmentAvailability);
    }
});
