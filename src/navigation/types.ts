import { IListItem } from '@screens/list';
import ROUTES from './routes';

export type MainStackParamList = {
	[ROUTES.ROOT_LIST_SCREEN]: undefined;
	[ROUTES.LIST_SCREEN_ITEM]: IListItem;
};
