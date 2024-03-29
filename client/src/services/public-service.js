import client from './client';

const publicService = {
    getBands: async () => {
        let bands = (await client.get(
            `/api/public/band`
        )).data;
        return bands;
    },
    getBand: async (id) => {
        let response = await client.get(
            `/api/public/band/${id}`
        );
        return response.data;
    },
    getEvents: async () => {
        let events = (await client.get(
            `/api/public/event`
        )).data;
        return events;
    },
};

export default publicService;