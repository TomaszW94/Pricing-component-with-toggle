function toggle() {
    let toggle = document.getElementById('toggle');
    let prices_monthly = document.querySelectorAll('.monthly_price');
    let prices_annuall = document.querySelectorAll('.annually_price');
    if (toggle.checked == true) {
      prices_annuall.forEach(price => price.style.display = "none");
      prices_monthly.forEach(price => price.style.display = "block");
    } else {
      prices_annuall.forEach(price => price.style.display = "block");
      prices_monthly.forEach(price => price.style.display = "none");
    }
  }