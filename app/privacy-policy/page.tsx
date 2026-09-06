import PolicyPage from "@/components/PolicyPage";
export default function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy Policy" updated="September 5, 2026">
      <h2>Information you send</h2>
      <p>
        When you contact zenivo, you may provide your name, email address, phone
        number and project details. This information is used only to respond to
        your enquiry, prepare a proposal or provide agreed software services.
      </p>
      <h2>Storage and sharing</h2>
      <p>
        This website does not sell personal information. Enquiries are handled
        through email. Information may be shared with a service provider only
        when needed to deliver an agreed service or operate the website, and
        never as a marketing list without your permission.
      </p>
      <h2>Retention and contact</h2>
      <p>
        Information is kept only as long as reasonably needed for communication,
        records or an active engagement. To ask about your information or
        request correction or deletion, email{" "}
        <a href="mailto:care.zenivo@gmail.com">care.zenivo@gmail.com</a>.
      </p>
    </PolicyPage>
  );
}
