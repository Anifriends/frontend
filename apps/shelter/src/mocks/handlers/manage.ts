import { delay, http, HttpResponse } from 'msw';

const DUMMY_USER = {
  volunteerId: 1,
  applicantId: 2,
  volunteerName: '김영희',
  volunteerBirthDate: '2021-11-08',
  volunteerGender: 'FEMALE',
  volunteerPhoneNumber: '010-1234-5678',
  volunteerAttendance: false,
};

const DUMMY_USER_LIST = Array.from({ length: 8 }, () => {
  return {
    ...DUMMY_USER,
    volunteerId: Math.random(),
    applicantId: Math.random(),
  };
});

export const handlers = [
  http.get(
    '/shelters/recruitments/:recruitmentId/approval',
    async ({ request }) => {
      console.log(request);
      await delay(200);
      return HttpResponse.json(
        {
          applicants: DUMMY_USER_LIST,
        },
        { status: 200 },
      );
    },
  ),
  http.patch(
    '/shelters/recruitments/:recruitmentId/approval',
    async ({ request, params }) => {
      const { recruitmentId } = params;
      const orderUpdates = await request.json();
      console.log(request, recruitmentId, orderUpdates);
      await delay(1000);
      return HttpResponse.json({ status: 200 });
    },
  ),
];
