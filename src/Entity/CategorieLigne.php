<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\CategorieLigneRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ApiResource(
 *     collectionOperations={
 *     "get"=
 *     {"normalization_context"=
 *     {"groups"= {"cate"}
 *     },
 *     "path"="/categories"}
 * ,"post"={"path"="/categories"}
 * },
 *     itemOperations={
 *     "get"={

 *     "normalization_context"={"groups"={"categorie_detail"}},
 *     "path"="/categories/{id}"
 *     }
 *     ,"delete"={"path"="/categories/{id}"}
 *      ,"patch"={"path"="/categories/{id}"}
 *      ,"put"={"path"="/categories/{id}"}
 * }
 *
 * )
 * @UniqueEntity("nomCat",message="le nom de la categorie existe")
 * @UniqueEntity("abreviationCat", message="Cette abreviation existe")
 * @ApiFilter(SearchFilter::class, properties={"nomCat","abreviationCat"})
 * @ORM\Entity(repositoryClass=CategorieLigneRepository::class)
 */
class CategorieLigne
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"cate","categorie_detail"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"cate","categorie_detail","lier_livre","ligne_fils"})
     * @Assert\NotBlank(message="ce champs doit être fournit")
     * @Assert\Length(min="3", minMessage="les caractère doivent exceder 3",
     *     max="50", maxMessage="es caractère ne doivent pas exceder 50")
     */
    private $nomCat;

    /**
     * @ORM\Column(type="string", length=10)
     * @Groups({"cate","categorie_detail"})
     * @Assert\NotBlank(message="ce champs doit être fournit")
     * @Assert\Length(min="3", minMessage="les caractère doivent exceder 3",
     *     max="50", maxMessage="es caractère ne doivent pas exceder 10")
     */
    private $abreviationCat;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"categorie_detail"})
     * @Assert\Length(min="3", minMessage="les caractère doivent exceder 3",
     *     max="50", maxMessage="es caractère ne doivent pas exceder 255")
     */
    private $descriptionCat;

    /**
     * @ORM\Column(type="datetime_immutable")
     * @Groups({"categorie_detail"})
     */
    private $creationAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"categorie_detail"})
     */
    private  $modifAt;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"categorie_detail"})
     */
    private $isAffecter;

    /**
     * @ORM\Column(type="boolean")
     *
     */
    private $isNonSupprimable;

    /**
     * @ORM\OneToMany(targetEntity=LigneDepense::class, mappedBy="categorieLigne")
     *
     */
    private $ligneDepenses;

    public function __construct()
    {
        $this->ligneDepenses = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNomCat(): ?string
    {
        return $this->nomCat;
    }

    public function setNomCat(string $nomCat): self
    {
        $this->nomCat = $nomCat;

        return $this;
    }

    public function getAbreviationCat(): ?string
    {
        return $this->abreviationCat;
    }

    public function setAbreviationCat(string $abreviationCat): self
    {
        $this->abreviationCat = $abreviationCat;

        return $this;
    }

    public function getDescriptionCat(): ?string
    {
        return $this->descriptionCat;
    }

    public function setDescriptionCat(?string $descriptionCat): self
    {
        $this->descriptionCat = $descriptionCat;

        return $this;
    }

    public function getCreationAt(): ?\DateTimeImmutable
    {
        return $this->creationAt;
    }

    public function setCreationAt(\DateTimeImmutable $creationAt): self
    {
        $this->creationAt = $creationAt;

        return $this;
    }

    public function getModifAt(): ?\DateTimeInterface
    {
        return $this->modifAt;
    }

    public function setModifAt(?\DateTimeInterface $modifAt): self
    {

        $this->modifAt = $modifAt;

        return $this;
    }

    public function getIsAffecter(): ?bool
    {
        return $this->isAffecter;
    }

    public function setIsAffecter(bool $isAffecter): self
    {
        $this->isAffecter = $isAffecter;

        return $this;
    }

    public function getIsNonSupprimable(): ?bool
    {
        return $this->isNonSupprimable;
    }

    public function setIsNonSupprimable(bool $isNonSupprimable): self
    {
        $this->isNonSupprimable = $isNonSupprimable;

        return $this;
    }

    /**
     * @return Collection|LigneDepense[]
     */
    public function getLigneDepenses(): Collection
    {
        return $this->ligneDepenses;
    }

    public function addLigneDepense(LigneDepense $ligneDepense): self
    {
        if (!$this->ligneDepenses->contains($ligneDepense)) {
            $this->ligneDepenses[] = $ligneDepense;
            $ligneDepense->setCategorieLigne($this);
        }

        return $this;
    }

    public function removeLigneDepense(LigneDepense $ligneDepense): self
    {
        if ($this->ligneDepenses->contains($ligneDepense)) {
            $this->ligneDepenses->removeElement($ligneDepense);
            // set the owning side to null (unless already changed)
            if ($ligneDepense->getCategorieLigne() === $this) {
                $ligneDepense->setCategorieLigne(null);
            }
        }

        return $this;
    }
}
