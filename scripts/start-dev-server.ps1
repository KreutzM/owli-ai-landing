param(
  [int]$Port = 4321,
  [string]$BindHost = "127.0.0.1",
  [switch]$Background
)

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$repoRoot = (Resolve-Path (Join-Path $scriptDir "..")).Path

if ($Background) {
  $outLog = Join-Path $repoRoot ".devserver.out.log"
  $errLog = Join-Path $repoRoot ".devserver.err.log"

  $args = @(
    "-NoProfile",
    "-ExecutionPolicy", "Bypass",
    "-Command",
    "Set-Location -LiteralPath '$repoRoot'; corepack pnpm dev --host $BindHost --port $Port"
  )

  $process = Start-Process -FilePath "powershell.exe" -ArgumentList $args -WorkingDirectory $repoRoot -RedirectStandardOutput $outLog -RedirectStandardError $errLog -PassThru
  Write-Host "Dev server started in background."
  Write-Host "PID: $($process.Id)"
  Write-Host "URL: http://$BindHost`:$Port/"
  Write-Host "Logs: $outLog and $errLog"
}
else {
  Set-Location -LiteralPath $repoRoot
  corepack pnpm dev --host $BindHost --port $Port
}
