import { Context, Next } from "koa";
import { ValidateError } from "tsoa";

const errorHandler = async (ctx: Context, next: Next) => {
    try {
        await next();
    } catch (err) {
        console.log(err)
        if (err instanceof ValidateError) {
            ctx.status = 422;
            ctx.body = {
                message: "Validation Failed",
                details: err?.fields,
            };
        }
        else if (err instanceof Error) {
            ctx.status = 500;
            ctx.body = {
                message: "Internal Server Error",
                error: err.message
            }
        }
        else {
            throw err;
        }
    }
}

export default errorHandler;