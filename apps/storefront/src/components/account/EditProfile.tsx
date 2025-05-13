import { useTranslations } from "next-intl";
import { useActionState } from "react";
import Input from "../ui/Input";
import updateProfile from "@/actions/account/updateProfile";
import Button from "../ui/Button";
import { StoreCustomerWithOrders } from "./AccountElement";

export default function EditProfile({setIsEditing, userData}: {userData: StoreCustomerWithOrders, setIsEditing: (isEditing: boolean) => void}) {
    const t  = useTranslations("AccountPage");
    const [message, formAction, isLoading] = useActionState(updateProfile, null);
    return (
        <>
        {message?.error && (
            <div className="bg-error/10 text-error p-4 rounded-md mb-6">
                {message.error}
            </div>
        )}
        <form action={formAction}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input
                label={t('profileFormFirstNameLabel')}
                name="firstName"
                type="text"
                defaultValue={message?.data?.firstName?? userData?.first_name ?? ''}
                required
                />

                <Input
                label={t('profileFormLastNameLabel')}
                name="lastName"
                type="text"
                defaultValue={message?.data?.lastName ?? userData?.last_name ?? ''}
                required
                />
                
                <Input
                label={t('profileFormEmailLabel')}
                name="email"
                type="email"
                defaultValue={message?.data?.email ?? userData?.email ?? ''}
                required
                />

                <Input
                label={t('profileFormPhoneLabel')}
                name="phone"
                type="tel"
                defaultValue={message?.data?.phone ?? userData?.phone ?? ''}
                />
            </div>

            <h3 className="font-medium mb-4 mt-8">{t('profileFormChangePasswordHeading')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Input
                label={t('profileFormCurrentPasswordLabel')}
                name="currentPassword"
                type="password"
                defaultValue={message?.data?.currentPassword}
                placeholder="••••••••"
                />

                <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                    label={t('profileFormNewPasswordLabel')}
                    name="newPassword"
                    type="password"
                    defaultValue={message?.data?.newPassword}
                    placeholder="••••••••"
                />

                <Input
                    label={t('profileFormConfirmPasswordLabel')}
                    name="confirmPassword"
                    type="password"
                    defaultValue={message?.data?.confirmPassword}
                    placeholder="••••••••"
                />
                </div>
            </div>

            <div className="flex justify-end space-x-4 mt-8">
                <Button
                variant="secondary"
                onClick={() => setIsEditing(false)}
                >
                {t('profileFormCancelButton')}
                </Button>
                <Button
                variant="primary"
                type="submit"
                disabled={isLoading}
                >
                {t('profileFormSaveChangesButton')}
                </Button>
            </div>
        </form>
    </>
    );
}