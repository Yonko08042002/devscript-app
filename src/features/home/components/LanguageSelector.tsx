"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "core/components/atoms/select";
import { routing, usePathname, useRouter } from "i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
export default function LanguageSelector() {
  const t = useTranslations("LocaleSwitcher");

  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onValueChange(value: (typeof routing.locales)[number]) {
    startTransition(() => {
      router.replace(pathname, { locale: value });
    });
  }
  return (
    <Select
      defaultValue={locale}
      onValueChange={onValueChange}
      disabled={isPending}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>

      <SelectContent>
        {routing.locales.map((language) => (
          <SelectItem key={language} value={language}>
            <div className="flex gap-2 w-28">
              {t("locale", { locale: language })}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
