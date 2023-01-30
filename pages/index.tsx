import { Button, Heading, Input, TextArea, Paragraph, Tag } from "../components";
import { withLayout } from "../Layout/Layout";

function Home(): JSX.Element {
	return (
		<>
			<Heading tag="h1">Welcome to the OwnStorage!</Heading>
			<Paragraph size="large">
				This application was created as an educational pet-project. Potential customer of
				this application is resellers who is buying products in other countries and deliver
				it to his domestic country. Essentially, app must improve reseller`s experience.
			</Paragraph>
			<Paragraph size="large">
				It can make order in your goods that are still on the way, already in stock or
				already sold. Each category is in the particular tab, depends on delivery status or
				if item has already sold. Changing category for particular item is intuitively easy
				and convenient. And every item has a customizable: course of currency, delivery
				cost, delivery type, cost of one item and all ordered items.
			</Paragraph>
		</>
	);
}

export default withLayout(Home);
