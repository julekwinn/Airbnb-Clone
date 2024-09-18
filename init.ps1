# Pobiera ścieżkę do folderu, w którym znajduje się skrypt
$BasePath = Split-Path -Parent $MyInvocation.MyCommand.Definition

# Definiuje ścieżki do podfolderów
$BackendPath = Join-Path $BasePath "backend"
$FrontendPath = Join-Path $BasePath "frontend\djangobnb"

# Otwiera pierwsze okno CMD w folderze backend z tytułem "Backend Console" i uruchamia 'docker compose up --build'
Start-Process cmd.exe -ArgumentList "/K title Backend Console & cd /d `"$BackendPath`" & docker compose up --build"

# Otwiera drugie okno CMD w folderze frontend\djangobnb z tytułem "Frontend Console" i uruchamia 'npm run dev'
Start-Process cmd.exe -ArgumentList "/K title Frontend Console & cd /d `"$FrontendPath`" & npm run dev"
