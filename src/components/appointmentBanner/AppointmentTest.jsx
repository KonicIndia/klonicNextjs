import React from 'react'
function AppointmentTest() {

    return (
        <>
            <section class="appointment-area bg-image py-5" >
                <div class="container">
                    <div class="appointment-form">
                        <h4><i class="flaticon-calendar"></i> Make An Appointment</h4>
                        <form  method="post" action="https://konichealthcare.com/formsubmit/appointment-banner.php">
                            <div class="form-group">
                                <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
                                <input type="text" name="name" class="form-control" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="email" class="form-control" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="mobile" class="form-control" placeholder="Phone" />
                            </div>
                            <div class="form-group">
                                <input type="text" name="message" class="form-control" placeholder="Message" />
                            </div>
                            <button type="submit" name="submit" value="Submit" class="default-btn">Book Appointment</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AppointmentTest