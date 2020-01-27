export interface ResponseAPI {
    status: {
        code: string;
        messeg: string;
    };
    data: {
        userId: string;
        accessToken: string;
    };
}
