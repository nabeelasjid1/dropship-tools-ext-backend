import Twilio from "twilio";
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;

const twilio = Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
    lazyLoading: true
});

export default twilio;