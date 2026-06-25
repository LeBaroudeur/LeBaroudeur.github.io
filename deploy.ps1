# Build the client and publish it to the gh-pages branch (GitHub Pages).
# Usage:  npm run deploy   (or)   powershell -ExecutionPolicy Bypass -File ./deploy.ps1
$ErrorActionPreference = "Stop"
$root = $PSScriptRoot
$dist = Join-Path $root "client\dist"
$remote = "https://github.com/LeBaroudeur/LeBaroudeur.github.io.git"

Write-Host "==> Building client..." -ForegroundColor Cyan
npm --prefix "$root\client" run build

Write-Host "==> Publishing dist/ to gh-pages..." -ForegroundColor Cyan
Push-Location $dist
if (Test-Path ".git") { Remove-Item -Recurse -Force ".git" }
git init -q
git checkout -q -b gh-pages
git add -A
git -c user.name="LeBaroudeur" -c user.email="mehdi_msallem@icloud.com" commit -q -m "Deploy portfolio site"
git push -f $remote gh-pages
Remove-Item -Recurse -Force ".git"
Pop-Location
Write-Host "==> Done. Live at https://mehdi-msallem.me" -ForegroundColor Green
