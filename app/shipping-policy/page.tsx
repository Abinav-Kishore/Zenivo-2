import PolicyPage from "@/components/PolicyPage";
export default function ShippingPolicy() {
  return (
    <PolicyPage title="Shipping Policy" updated="September 5, 2026">
      <h2>Digital services only</h2>
      <p>
        zenivo sells software development and related digital services. No
        physical products are sold or shipped, so shipping charges, delivery
        tracking and physical delivery do not apply.
      </p>
      <h2>Digital delivery</h2>
      <p>
        Agreed source code, builds, documentation or access details are
        delivered electronically through the project communication or repository
        agreed with the client. Delivery timing is defined by the project scope
        and milestones.
      </p>
      <h2>Questions</h2>
      <p>
        For delivery questions, contact{" "}
        <a href="mailto:care.zenivo@gmail.com">care.zenivo@gmail.com</a>.
      </p>
    </PolicyPage>
  );
}
