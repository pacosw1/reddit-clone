import {
    validate,
    ValidationError,
} from 'class-validator';

export const validateJSON = async (obj: Object) => {
    let errors: ValidationError[] = []
    try {
        return await validate(obj, { forbidUnknownValues: true, stopAtFirstError: true })
    } catch (err) {
        return errors
    }
}

export const validateBody = async (req: Object, res: any) => {
    const errors = await validateJSON(req)
    if (errors.length > 0) {
        return res.status(400).send(JSON.stringify({
            errors: errors.map(err => {
                return { message: err.constraints }
            })
        }))
    }
}