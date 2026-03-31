export const mms = {
  convertMoney(amount) {
    if (amount === null || amount === undefined) return "";

    const abs = Math.abs(amount);

    const formatCompact = (num, suffix) => {
      const value = num.toFixed(1);
      return value.endsWith(".0")
        ? `${parseInt(value)}${suffix}`
        : `${value}${suffix}`;
    };

    // Large numbers → compact
    if (abs >= 1_000_000_000) {
      return formatCompact(amount / 1_000_000_000, "B");
    }
    if (abs >= 1_000_000) {
      return formatCompact(amount / 1_000_000, "M");
    }
    if (abs >= 1_000) {
      return formatCompact(amount / 1_000, "k");
    }

    // Small numbers → comma format
    return new Intl.NumberFormat("en-IN").format(amount);
  },

  timeAgo(timestamp) {
    if (!timestamp) return "";

    const now = Date.now();
    const diff = now - timestamp;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) return "just now";
    if (minutes < 60) return `${minutes}m`;
    if (hours < 24) return `${hours}h`;
    if (days < 7) return `${days}d`;
    if (days < 30) return `${Math.floor(days / 7)}w`;
    if (months < 12) return `${months}mo`;
    return `${years}y`;
  },
};
