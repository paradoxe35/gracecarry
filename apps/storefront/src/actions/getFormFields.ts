export default function getFormFields(data: FormData) {
    const fields: Record<string, any> = {};
    data.forEach((value, key) => {
        fields[key] = value as string;
    });
    return fields;
}