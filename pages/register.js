import Link from "next/link"

export default function Register() {
    return (
      <div class="container mt-5 pt-5 d-flex justify-content-center" >
          <div class="row main-content bg-success text-center">
              <div class="col-md-4 text-center company__info">
                  <span class="company__logo"><h2><span class="fa fa-android"></span></h2></span>
                  <h4 class="company_title">Your Company Logo</h4>
              </div>
              <div class="col-md-8 col-xs-12 col-sm-12 login_form ">
                  <div class="container-fluid">
                      <div class="row">
                          <h2 className="pt-3">Registration</h2>
                      </div>
                      <div class="row">
                          <form control="" class="form-group">
                              <div class="row">
                                  <input type="email" name="email" id="email" class="form__input" placeholder="email"/>
                              </div>
                              <div class="row">
                                  <input type="text" name="user_name" id="user_name" class="form__input" placeholder="User Name"/>
                              </div>
                              <div class="row">
                                  <input type="text" name="role" id="role" class="form__input" placeholder="Insert user Role"/>
                              </div>
                              <div class="row">
                                  {/* <!-- <span class="fa fa-lock"></span> --> */}
                                  <input type="password" name="password" id="password" class="form__input" placeholder="Password"/>
                              </div>
                              
                              <div class="row">
                                  <input type="submit" value="Submit" class="btn"/>
                              </div>
                          </form>
                      </div>
                      <div class="row">
                          <p>Don't have an account? <Link href="/login"><a href="#">Login Here</a></Link></p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}