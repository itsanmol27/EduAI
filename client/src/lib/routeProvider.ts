const BASEURL = process.env.NEXT_PUBLIC_Backend_Route;

export const generateQuestionsRoute = `${BASEURL}/test/generate`;
export const generateQuestionsWithContentRoute = `${BASEURL}/test/generate/content`;
export const submitQuestionsRoute = `${BASEURL}/test/submit`;
export const signUpRoute = `${BASEURL}/auth/signup`
export const signInRoute = `${BASEURL}/auth/signin`
export const solveDoubtRoute = `${BASEURL}/doubt/create`
export const lessonGenerateRoute = `${BASEURL}/lessonPlan/create`