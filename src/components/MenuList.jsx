import Button from "./Button";
import EmptyMenuMsg from "./EmptyMenuMsg";

export default function MenuList({ coffMenu, available }) {
  if (!available) return <EmptyMenuMsg />;

  return (
    <section className="menu_coffeeLists">
      {coffMenu.map((coff) => (
        <div className="menu_coffeeLists-card" key={coff.id}>
          <h2 className="coffeeName">{coff.coffeeName}</h2>
          <h3 className="original">{coff.origin}</h3>
          <p className="description">{coff.description}</p>
          <img src={coff.image} alt={coff.coffeeName} className="coffeeImg" />

          <div className="discounted">
            <span>{coff.discount}%</span>
            <br />
            <span>OFF</span>
          </div>
          <Button type={"orderBtn"}>
            <img
              src="/public/assets/add-to-cart-svgrepo-com.svg"
              alt="orderBtn"
            />
          </Button>

          <span className="price">Price: ${coff.price}</span>
        </div>
      ))}
    </section>
  );
}
