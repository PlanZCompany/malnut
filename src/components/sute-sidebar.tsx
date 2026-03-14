"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { SITE_NAV_ITEMS } from "@/data/site-config";
import { CONTACT_INFO } from "@/data/site-content";

type SiteSidebarProps = {
  logoSrc: string;
  logoAlt: string;
  companyName?: string;
};

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function SidebarNav({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav aria-label="Section navigation" className="flex flex-col gap-2">
      {SITE_NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => {
            scrollToSection(item.id);
            onNavigate?.();
          }}
          className="text-left text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
}

function ContactButton() {
  return (
    <Button asChild className="w-full">
      <a href={`mailto:${CONTACT_INFO.email}`}>Contact</a>
    </Button>
  );
}

function SidebarBrand({ logoSrc, logoAlt, companyName }: SiteSidebarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-md">
        <Image
          src={logoSrc}
          alt={logoAlt}
          fill
          className="object-contain"
          sizes="40px"
          priority
        />
      </div>

      {companyName ? (
        <span className="text-sm font-semibold tracking-wide">
          {companyName}
        </span>
      ) : null}
    </div>
  );
}

export function SiteSidebar({
  logoSrc,
  logoAlt,
  companyName,
}: SiteSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-72 lg:flex-col lg:border-r lg:bg-background">
        <div className="flex h-full flex-col px-6 py-8">
          <SidebarBrand
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            companyName={companyName}
          />

          <Separator className="my-6" />

          <div className="flex-1">
            <SidebarNav />
          </div>

          <div className="pt-6">
            <ContactButton />
          </div>
        </div>
      </aside>

      <div className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <SidebarBrand
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            companyName={companyName}
          />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[300px] sm:w-[340px]">
              <SheetHeader className="pb-4">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>

              <div className="flex h-full flex-col">
                <SidebarNav onNavigate={() => setIsOpen(false)} />

                <div className="mt-6">
                  <ContactButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
