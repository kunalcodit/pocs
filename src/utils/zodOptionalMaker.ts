import { z, ZodTypeAny, ZodObject, ZodRawShape, ZodOptional } from 'zod';

// Recursive function to make all properties optional, including nested objects
const makeOptional = (schema: ZodObject<any>): ZodObject<any> => {
	const shape = schema.shape;
	const newShape = Object.keys(shape).reduce((acc, key) => {
		const prop = shape[key];
		if (prop instanceof ZodObject) {
			acc[key] = makeOptional(prop).optional();
		} else {
			acc[key] = prop.optional();
		}
		return acc;
	}, {} as ZodRawShape);
	return z.object(newShape);
};

export default makeOptional;
