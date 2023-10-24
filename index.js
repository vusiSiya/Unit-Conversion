
const inputEl = document.querySelector("input");
const convertBtn = document.querySelector("button");
const conversionsEl = document.querySelector(".conversions");
render();

convertBtn.addEventListener("click", () => inputEl.value && render());

function render() {
  const number = inputEl.value;
  const conversionText = [
    {
      header: "Length (Meters/Feet)",
      metricUnit: "meters",
      imperialUnit: "feet",
      conversionNum: 3.2808399,
    },
    {
      header: "Volume (Liters/Gallons)",
      metricUnit: "liters",
      imperialUnit: "gallons",
      conversionNum: 0.26417,
    },
    {
      header: "Mass (Kilograms/Pounds)",
      metricUnit: "kilos",
      imperialUnit: "pounds",
      conversionNum: 2.20462
    }
  ];

  conversionsEl.innerHTML = conversionText.reduce((acc, obj) => {
    let imperialConversion = number * obj.conversionNum;
    let metricConversion = number / obj.conversionNum;
    return acc + (
      `<section>
                <h5>${obj.header}</h5>
                ${number &&
      `<div>
                        <p>${number} ${obj.metricUnit} = ${imperialConversion.toFixed(3)} ${obj.imperialUnit}</p>
                        |
                        <p>${number} ${obj.imperialUnit} = ${metricConversion.toFixed(3)} ${obj.metricUnit}</p>
                    </div>`
      }
            </section>`)
  }, "");

}


