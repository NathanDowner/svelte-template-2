import { Actions } from './$types';
export const actions: Actions = {
	login: async ({ cookies, request }) => {
		const data = await request.formData();
		const username = data.get('username') as string;
		cookies.set('user', JSON.stringify({ username }));

		throw redirect(301, Pages);
	}
};
