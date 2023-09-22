import CustomButton from "./button"

const WishlistComponent = () => {
    return(
        <div id="wishlist" className="flex gap-8 pt-6 font-medium">
        <CustomButton
          size={"small"}
          buttonType="text"
          label="Wishlist"
          iconSide="left"
          iconType="heart"
        />
        <CustomButton
          size={"small"}
          buttonType="text"
          label="Ask question"
          iconSide="left"
          iconType="heart"
        />
        <CustomButton
          size={"small"}
          buttonType="text"
          label="Share"
          iconSide="left"
          iconType="heart"
        />
      </div>
    )
}
export default WishlistComponent;