
export const sanitizeUser = (user: any) => {
    return { id: user?._id, name: user?.name, email: user?.email };
};

export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};


export const trimInput = (input: string) => {
    return input.trim();
};