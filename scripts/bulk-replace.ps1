$ErrorActionPreference = 'Stop'

function Update-FileContent {
    param(
        [Parameter(Mandatory=$true)][string]$Path
    )

    $original = Get-Content -LiteralPath $Path -Raw

    # Replace hrefs /contact and /about with #
    $updated = $original `
        -replace 'href="/contact"', 'href="#"' `
        -replace 'href="/about"', 'href="#"' `
        -replace 'Recognized for Excellence', 'JKKN'

    if ($updated -ne $original) {
        Set-Content -LiteralPath $Path -Value $updated -Encoding utf8
        return $true
    }

    return $false
}

$patterns = @('*.tsx','*.jsx','*.ts','*.html')
$changed = 0

Get-ChildItem -Path .. -Recurse -File -Include $patterns |
    ForEach-Object {
        if (Update-FileContent -Path $_.FullName) { $changed++ }
    }

Write-Host "Files updated: $changed"


