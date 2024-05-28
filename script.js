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

document.addEventListener('DOMContentLoaded', () => {
    const sleep = [document.getElementById('4'), document.getElementById('5'),  document.getElementById('6') ];

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

document.addEventListener('DOMContentLoaded', () => {
    const getValuesButton = document.getElementById('getValuesButton');

    getValuesButton.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const valuesArray = Array.from(checkboxes).map(checkbox => checkbox.checked ? 1 : 0);

        console.log(valuesArray);
    });

    function displayValues(values) {
        const displayElement = document.createElement('div');
        displayElement.textContent = 'Values: ' + values.join(', ');
        document.body.appendChild(displayElement);
    }

});

Telegram.WebApp.sendData("just testing")