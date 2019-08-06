import SELECTORS from '../../../src/js/config/translations/en';
import { getTextOfElement, sanitizeSelector } from '../helpers/utils';

class AppHeader {
	get cart() {
		return $(`~test-${ sanitizeSelector(SELECTORS.cart.label) }`);
	}

	/**
	 * Get the cart amount
	 *
	 * @return {string}
	 */
	getCartAmount() {
		// There is a little delay in adding / removing data from the cart
		driver.pause(100);

		return getTextOfElement(this.cart);
	}

	/**
	 * Open the cart
	 *
	 * @return {void}
	 */
	openCart() {
		return this.cart.click();
	}
}

export default new AppHeader();