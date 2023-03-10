import { redirect, type Handle } from '@sveltejs/kit';
import { Pages } from './lib/pages';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.user = event.cookies.get('user') ? JSON.parse(event.cookies.get('user')!) : null;

	if (event.url.pathname.startsWith(Pages.LOGIN) && event.locals.user) {
		throw redirect(303, Pages.DASHBOARD);
	}

	if (event.url.pathname.startsWith(Pages.DASHBOARD) && !event.locals.user) {
		throw redirect(303, Pages.LOGIN);
	}
	return resolve(event);
};
