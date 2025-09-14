import passport from "../../assets/images/tourism-passport.jpg";

export function HeroPassport() {
  return (
    <img
      src={passport}
      alt="Hero Passport"
      className="w-full h-full object-cover"
    />
  );
}
