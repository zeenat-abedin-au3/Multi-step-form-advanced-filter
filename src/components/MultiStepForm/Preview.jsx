import React, { Fragment } from "react";
import { Card, Typography, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ArrowLeftOutlined } from "@ant-design/icons";

import { handleStepCount } from "../../redux/actions/forn";

const { Text } = Typography;

const Preview = () => {
  const dispatch = useDispatch();
  const {
    formData: {
      fullName,
      email,
      phone,
      password,
      age,
      gender,
      occupation,
      address,
      city,
      pincode,
      state,
    },
  } = useSelector((state) => state.formReducer);
  return (
    <Fragment>
      <Card>
        <div>
          {<Text strong={true}>Full Name:</Text>} {<Text>{fullName}</Text>}
        </div>
        <div>
          {<Text strong={true}>Email:</Text>} {<Text>{email}</Text>}
        </div>
        <div>
          {<Text strong={true}>Phone:</Text>} {<Text>{phone}</Text>}
        </div>
        <div>
          {<Text strong={true}>Password:</Text>} {<Text>{password}</Text>}
        </div>
      </Card>
      <Card>
        <div>
          {<Text strong={true}>Full Name:</Text>} {<Text>{fullName}</Text>}
        </div>
        <div>
          {<Text strong={true}>Age:</Text>} {<Text>{age}</Text>}
        </div>
        <div>
          {<Text strong={true}>Gender:</Text>}{" "}
          {<Text>{gender.toUpperCase()}</Text>}
        </div>
        {occupation ? (
          <div>
            {<Text strong={true}>Occupation:</Text>} {<Text>{occupation}</Text>}
          </div>
        ) : (
          ""
        )}
      </Card>
      <Card>
        <div>
          {<Text strong={true}>Address:</Text>} {<Text>{address}</Text>}
        </div>
        <div>
          {<Text strong={true}>City:</Text>} {<Text>{city}</Text>}
        </div>
        <div>
          {<Text strong={true}>Pincode:</Text>} {<Text>{pincode}</Text>}
        </div>
        <div>
          {<Text strong={true}>State:</Text>} {<Text>{state}</Text>}
        </div>
      </Card>

      <div>
        <Button
          type="primary"
          style={{ marginRight: "5px" }}
          onClick={() => dispatch(handleStepCount(5))}
        >
          Submit
        </Button>
        <Button
          onClick={() => dispatch(handleStepCount(3))}
          style={{ marginLeft: "5px" }}
          icon={<ArrowLeftOutlined />}
        >
          Previous
        </Button>
      </div>
    </Fragment>
  );
};

export default Preview;
