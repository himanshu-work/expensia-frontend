import React from "react";

function ChangePassword({
  userData,
  submitUserData,
  changeIsResetPasswordOpen,
  setUserData,
}) {
  return (
    <div className="flex justify-center">
      <div className="mt-10">
        <p className="text-lg">Reset Password</p>
        <div>
          <form
            className="mt-5 w-64"
            onSubmit={(e) => {
              e.preventDefault();
              submitUserData(userData);
            }}
          >
            {/* <div>
          <img src={Expensia} alt="ene" className="Expensia" />
        </div> */}
            <div className="inputWrap  my-5">
              <label className="labelSign" htmlFor="password">
                Current password
              </label>
              <input
                value={userData.old_password}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    old_password: e.target.value,
                  })
                }
                type="password"
                placeholder="Current password"
                required
                className="inputSign"
                id="confirm_password"
              />
            </div>
            <div className="inputWrap">
              <label className="labelSign" htmlFor="email">
                Password
              </label>
              <input
                value={userData.password}
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
                type="password"
                placeholder="Enter password"
                required
                className="inputSign"
                id="password"
              />
            </div>
            <div className="inputWrap  my-5">
              <label className="labelSign" htmlFor="password">
                Confirm password
              </label>
              <input
                value={userData.confirm_password}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    confirm_password: e.target.value,
                  })
                }
                type="password"
                placeholder="Confirm password"
                required
                className="inputSign"
                id="confirm_password"
              />
            </div>
            <div className="flex gap-5">
              <button className="signBtnVariant2 w-20" type="submit">
                Reset
              </button>
              <button
                type="button"
                className="signBtnVariant w-20"
                onClick={() => {
                  changeIsResetPasswordOpen();
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
