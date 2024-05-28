document.addEventListener('DOMContentLoaded', () => {
    const sleep = [document.getElementById('1'), document.getElementById('2')];

    sleep.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                sleep.forEach(otherCheckbox => {
                    if (otherCheckbox !== checkbox) {
                        otherCheckbox.disabled = true;
                    }
                });
            } else {
                const anyChecked = sleep.some(cb => cb.checked);
                if (!anyChecked) {
                    sleep.forEach(otherCheckbox => {
                        otherCheckbox.disabled = false;
                    });
                }
            }
        });
    });
});