import sys
sys.path.append("..")

from starlette import status
from starlette.responses import RedirectResponse

from fastapi import Depends, APIRouter, Request, Form
import models
from database import engine, SessionLocal
from sqlalchemy.orm import Session
from .auth import get_current_user

from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

templates = Jinja2Templates(directory="templates")
models.Base.metadata.create_all(bind=engine)

router = APIRouter(
    prefix="/todos",
    tags=["todos"],
    responses={404: {"description": "Not found"}}
)






def get_db():
    try:
        db = SessionLocal()
        yield db
    finally:
        db.close()


# @router.get("/", response_class=HTMLResponse)
# async def read_all_by_user(request: Request, db: Session = Depends(get_db)):

#     user = await get_current_user(request)
#     if user is None:
#         return RedirectResponse(url="/auth", status_code=status.HTTP_302_FOUND)

#     todos = db.query(models.Todos).filter(models.Todos.owner_id == user.get("id")).all()
    #  return templates.TemplateResponse("home.html", {"request": request, "todos": todos, "user": user})


@router.get("/contact", response_class=HTMLResponse)
async def contact(request: Request):
    return templates.TemplateResponse("contact.html", {"request": request})


@router.post("/contact", response_class=HTMLResponse)
async def contact_user(request: Request, name: str = Form(...), email: str = Form(...),
                      phone: int = Form(...), message: str = Form(...), db: Session = Depends(get_db)):

    todo_model = models.Contact()
    todo_model.name = name
    todo_model.email = email
    todo_model.phone = phone
    todo_model.message = message 
    todo_model.complete = False
    print(todo_model)
    db.add(todo_model)
    db.commit()
    # return {"sucess"}
    msg = "User successfully created"
    return templates.TemplateResponse("contact.html", {"request": request, "msg": msg})
    return RedirectResponse(url="/contact", status_code=status.HTTP_302_FOUND)


