import { Link } from "@tanstack/react-router";
import { Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { channelMeta, type ChannelKey } from "@/lib/mock-data";

export function BrandLogo({ compact = false, className }: { compact?: boolean; className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2.5", className)}>
      <span className="relative grid size-9 shrink-0 place-items-center rounded-xl bg-primary/90 shadow-glow">
        <span className="absolute inset-0 rounded-xl bg-primary blur-md opacity-60" aria-hidden />
        <Bot className="relative size-5 text-primary-foreground" />
      </span>
      {!compact && (
        <span className="text-[15px] font-semibold tracking-tight">
          AutoAgent <span className="text-gradient-brand">AI</span>
        </span>
      )}
    </Link>
  );
}

export function PulseDot({ tone = "accent" }: { tone?: "accent" | "warning" | "muted" | "primary" }) {
  const color =
    tone === "accent"
      ? "bg-accent"
      : tone === "warning"
        ? "bg-warning"
        : tone === "primary"
          ? "bg-primary"
          : "bg-muted-foreground";
  return (
    <span className="relative flex size-2">
      <span className={cn("absolute inline-flex size-full animate-ping rounded-full opacity-70", color)} />
      <span className={cn("relative inline-flex size-2 rounded-full", color)} />
    </span>
  );
}

export function StatusPill({
  children,
  tone = "accent",
  className,
}: {
  children: React.ReactNode;
  tone?: "accent" | "warning" | "muted" | "primary";
  className?: string;
}) {
  const ring =
    tone === "accent"
      ? "border-accent/30 bg-accent/10 text-accent"
      : tone === "warning"
        ? "border-warning/30 bg-warning/10 text-warning"
        : tone === "primary"
          ? "border-primary/40 bg-primary/15 text-foreground"
          : "border-border bg-secondary text-muted-foreground";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs font-medium whitespace-nowrap",
        ring,
        className,
      )}
    >
      <PulseDot tone={tone} />
      {children}
    </span>
  );
}

export function ChannelChip({ channel, className }: { channel: ChannelKey; className?: string }) {
  const meta = channelMeta[channel];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[11px] font-medium",
        meta.chip,
        className,
      )}
    >
      <span className={cn("size-1.5 rounded-full", meta.dot)} />
      {meta.label}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-accent uppercase">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
    </div>
  );
}
