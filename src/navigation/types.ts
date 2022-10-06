import { IListItem } from '@screens/food-list';
import ROUTES from './routes';

export type MainStackParamList = {
	[ROUTES.FOOD_LIST]: undefined;
	[ROUTES.FOOD_DETAILS]: IListItem;
};
