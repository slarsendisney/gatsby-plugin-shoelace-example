import React from "react"

export default () => (
  <sl-card class="card card-header fill-width">
    <div slot="header">
      <p>
        Like my content? Why not subscribe to my non-exisitent mailform.{" "}
        <strong>I'm serious, it's imaginary.</strong>
      </p>
    </div>
    <sl-form class="form-overview">
      <sl-input name="name" type="text" label="Name"></sl-input>
      <br />
      <sl-input name="email" type="text" label="Email"></sl-input>
      <br />
      <sl-checkbox name="agree" value="yes">
        I totally agree to not recieve anything.
      </sl-checkbox>
      <br />
      <br />
      <sl-button type="primary" submit>
        Submit
      </sl-button>
    </sl-form>
  </sl-card>
)
