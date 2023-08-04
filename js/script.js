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
  } else {
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

// auto responder acc select
function selectAutoAcc() {
  var x = document.getElementById("mySelect").value;
  if (x === '0') {
    document.getElementById("showData").innerHTML = "<center><img src='empty2.png' alt='empty' style='display: flex;align-items: center;justify-content: center;width:30%;'></center>"
  } else {
    document.getElementById("showData").innerHTML = `
    <div class="card h-100">
                                   <div class="card-header">
                                        Autoresponder for Neha
                                   </div>
                                   <div class="card-body">
                                        <form method="post" action="">
                                             <!-- status radio -->
                                             <p class="labelish">Status</p>
                                             <div id="paymentContainer" name="paymentContainer" class="paymentOptions">
                                                  <div id="payCC" class="floatBlock">
                                                       <label for="paymentCC"> <input id="paymentCC" name="status" type="radio" value="enable" />Enable
                                                       </label>
                                                  </div>
                                                  <div id="payInvoice" class="floatBlock">
                                                       <label for="paymentInv"> <input id="paymentInv"
                                                                 name="status" type="radio" value="disable" checked/>
                                                            Disable</label>
                                                  </div>
                                             </div>
                                             <!-- sent to radio btn -->
                                             <p class="labelish">Sent to</p>
                                             <div id="paymentContainer" name="paymentContainer" class="paymentOptions">
                                                  <div id="payCC" class="floatBlock">
                                                       <label for="paymentCC"> <input id="paymentCC" name="sent" type="radio" value="all" checked/>All
                                                       </label>
                                                  </div>
                                                  <div id="payInvoice" class="floatBlock">
                                                       <label for="paymentInv"> <input id="paymentInv"
                                                                 name="sent" type="radio" value="disable" />
                                                            Individual</label>
                                                  </div>
                                                  <div id="payInvoice" class="floatBlock">
                                                       <label for="paymentInv"> <input id="paymentInv"
                                                                 name="sent" type="radio" value="disable" />
                                                            Group</label>
                                                  </div>
                                             </div><br>

                                             <!-- tab bar -->
                                             <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                  <li class="nav-item" role="presentation">
                                                  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Text & Media</button>
                                                  </li>
                                                  <li class="nav-item" role="presentation">
                                                  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Buttons</button>
                                                  </li>
                                                  <li class="nav-item" role="presentation">
                                                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">List Media</button>
                                                  </li>
                                             </ul>
                                             <div class="tab-content" id="myTabContent">
                                                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                       <p style="font-size: 15px;font-weight: 600;padding-top: 10px;">Media file</p>
                                                       <div class="upload-btn-wrapper">
                                                            <button class="upload_btn">Upload a file</button>
                                                            <input type="file" name="myfile" />
                                                       </div>
                                                       <p style="font-size: 15px;font-weight: 600;padding-top: 10px;">Caption</p>
                                                        <textarea name="the-textarea" id="the-textarea" maxlength="300" placeholder="Start Typin..."autofocus></textarea>
                                                        <button class="btn btn-primary"><i class="fas fa-save"></i> Save</button>
                                                  </div>
                                                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                                  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                             </div><br>

                                             <!-- mob num card -->
                                             <div class="card h-100">
                                                  <div class="container-fluid p-2">
                                                       <div class="form-group">
                                                            <label for="min">Resubmit message only after (minute)</label>
                                                            <select class="form-control" id="min" style="margin-top:10px;" >
                                                                 <option>1</option>
                                                                 <option>2</option>
                                                                 <option>3</option>
                                                                 <option>4</option>
                                                                 <option>5</option>
                                                            </select>
                                                       </div><br>
                                                       <div class="form-group">
                                                            <div class="form-group">
                                                                 <label for="tel">Except contacts</label>
                                                                 <input type="tel" class="form-control" style="margin-top:10px;" id="tel" placeholder="Contacts" required>
                                                                 <p style="font-size: 12px;color: rgb(182, 186, 186);margin-top: 5px;">Validate exapmle: 841234567890, 840123456789</p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div><br>
                                             <hr class="dropdown-divider" />
                                             <!-- submit button -->
                                             <button class="btn btn-success" type='submit'><i class="far fa-paper-plane"></i> submit</button>
                                        </form>
                                   </div>
                              </div>
     `;
  }
}

// export participant acc select
function selectExportPar() {
  var x = document.getElementById("mySelect").value;
  if (x === '0') {
    document.getElementById("showData").innerHTML = "<center><img src='empty2.png' alt='empty' style='display: flex;align-items: center;justify-content: center;width:30%;'></center>"
  } else {
    document.getElementById("showData").innerHTML = `
    <table class="table table-dark">
                                   <tbody>
                                        <tr>
                                             <td>
                                                  <div style="align-items: center;">
                                                       <h5 style="font-family: Poppins, sans-serif;font-weight: 500;">🙏Shaadi Bandhan group🙏 ${x}</h5>
                                                       <p style="font-size: 12px;color: rgb(152, 152, 143);padding-left: 3px;">Group ID: 120363142866874492@g.us</p>
                                                       <span class="badge rounded-pill bg-light text-dark">152 participants</span>
                                                  </div>
                                             </td>
                                             <td style="text-align: center;vertical-align: ;">
                                                  <button class='btn btn-danger'><i class="bi bi-box-arrow-right"></i>&nbsp; Logout</button>
                                             </td>
                                        </tr>
                                        <tr>
                                             <td>
                                                  <div style="align-items: center;">
                                                       <h5 style="font-family: Poppins, sans-serif;font-weight: 500;">🎉🌸Shaadi Marriage grp 01🌸🎉 ${x}</h5>
                                                       <p style="font-size: 12px;color: rgb(152, 152, 143);padding-left: 3px;">Group ID: 120363142866874492@g.us</p>
                                                       <span class="badge rounded-pill bg-light text-dark">42 participants</span>
                                                  </div>
                                             </td>
                                             <td style="text-align: center;">
                                                  <button class='btn btn-danger'><i class="bi bi-box-arrow-right"></i>&nbsp; Logout</button>
                                             </td>
                                        </tr>
                                        <tr>
                                             <td>
                                                  <div style="align-items: center;">
                                                       <h5 style="font-family: Poppins, sans-serif;font-weight: 500;">🙏Shaadi Bandhan group🙏</h5>
                                                       <p style="font-size: 12px;color: rgb(152, 152, 143);padding-left: 3px;">Group ID: 120363142866874492@g.us</p>
                                                       <span class="badge rounded-pill bg-light text-dark">102 participants</span>
                                                  </div>
                                             </td>
                                             <td style="text-align: center;">
                                                  <button class='btn btn-danger'><i class="bi bi-box-arrow-right"></i>&nbsp; Logout</button>
                                             </td>
                                        </tr>
                                   </tbody>
                              </table>
     `;
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
