'use client'

import { useEffect, useRef, useState } from 'react'
import type { FormEvent, InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface EarlyAccessFormProps {
  variant?: 'hero' | 'cta'
  label?: string
  successMessage?: string
  className?: string
  inputProps?: InputHTMLAttributes<HTMLInputElement>
  autoFocus?: boolean
  onSubmitted?: () => void
  inputId?: string
}

export function EarlyAccessForm({
  variant = 'cta',
  label = 'Enter your work email to join the early access list',
  successMessage = "Thanks! We'll reach out with onboarding details shortly.",
  className,
  inputProps,
  autoFocus = false,
  onSubmitted,
  inputId,
}: EarlyAccessFormProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle')
  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email.trim()) return

    setStatus('submitting')
    setTimeout(() => {
      setStatus('submitted')
      setEmail('')
      onSubmitted?.()
    }, 400)
  }

  const containerClasses =
    variant === 'hero'
      ? 'w-full max-w-xl rounded-2xl border border-white/10 bg-background/80 p-4 shadow-lg backdrop-blur'
      : 'flex w-full max-w-xl flex-col items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'

  const inputWrapperClasses = variant === 'hero' ? 'flex flex-col gap-3 sm:flex-row' : 'flex w-full flex-col gap-3 sm:flex-row'

  const fieldId = inputId ?? (variant === 'hero' ? 'early-access-email-hero' : 'early-access-email')

  return (
    <form onSubmit={handleSubmit} className={cn(containerClasses, className)}>
      <div className="w-full">
        <Label htmlFor={fieldId} className="mb-2 block text-sm font-medium text-foreground/80">
          {label}
        </Label>
        <div className={inputWrapperClasses}>
          <Input
            id={fieldId}
            ref={inputRef}
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value)
              if (status === 'submitted') {
                setStatus('idle')
              }
            }}
            placeholder="you@company.com"
            className={cn(
              'h-12 flex-1 border-white/20 bg-background/80 text-base text-foreground placeholder:text-muted-foreground',
              variant === 'hero' ? 'min-w-0' : ''
            )}
            {...inputProps}
          />
          <Button
            type="submit"
            size="lg"
            disabled={status === 'submitting'}
            className="h-12 min-w-[160px] rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
          >
            {status === 'submitted' ? 'Added' : status === 'submitting' ? 'Adding…' : 'Join Early Access'}
          </Button>
        </div>
      </div>
      {status === 'submitted' && (
        <p className="text-sm text-primary-foreground/80">{successMessage}</p>
      )}
    </form>
  )
}
