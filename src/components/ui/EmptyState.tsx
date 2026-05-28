interface EmptyStateProps {
  message: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="py-24 text-center">
      <p className="text-[15px] italic text-(--text-muted) font-cormorant">{message}</p>
    </div>
  );
}
