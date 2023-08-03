const charts = document.querySelectorAll(".chart");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});

function selectAccount() {
  var x = document.getElementById("mySelect").value;
  if (x === '0') {
    document.getElementById("showData").innerHTML = "<center><img src='empty2.png' alt='empty' style='display: flex;align-items: center;justify-content: center;width:30%;'></center>"
  }else{
    document.getElementById("showData").innerHTML = `<div class="show">
                <div class="row" style='display:flex;'>
                  <div class='col-sm-5' style="display: flex;">
                      <img src='person-bounding-box.svg' alt='person' style="width:25%;">
                      <div style="display: flex;flex-direction: column;margin: 10px;">
                        <h4 style="padding-left: 20px;font-family: Poppins, sans-serif;font-weight: 500;">${x}</h4>
                        <p style="padding-left: 20px;">${x}@gmail.com</p>
                      </div>
                  </div>
                  <div class='col-sm-7'>
                    <div style="align-items: center;float: right;">
                      <button class='btn btn-danger mt-4'><i class="bi bi-box-arrow-right"></i>&nbsp; Logout</button>
                    </div>
                  </div>
                </div><br>
                <div class="row">
                    <div class="col-sm-12 card h-100 p-4" style="border-radius: 12px;">
                      <p>Instance ID</p>
                      <div class="card p-2" style="background-color: #0a0909;color:white;border-radius: 12px;">
                        64CA0858845BA
                      </div>

                      <p class="pt-3">Access Token</p>
                      <div class="card p-2" style="background-color: #0a0909;color:white;border-radius: 12px;">
                        6489a197294b6
                      </div>
                    </div>
                </div>
              </div>`;
  }
}

// $(document).ready(function(){
//   $("#profile").click(function(){
//     alert("prfile:");
//     $.post(
//       "profile.html", { code: rel }, function (data) {
//         $("#f" + rel).css("color", "red");
//       }
//     );
//   });
// });
